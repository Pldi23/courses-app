import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import {LoaderService} from '../loader/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
	private readonly requests: HttpRequest<any>[] = [];

	constructor(private readonly loaderService: LoaderService) {}

	private removeRequest(req: HttpRequest<any>): void {
		const i: number = this.requests.indexOf(req);
		if (i >= 0) {
			this.requests.splice(i, 1);
		}
		this.loaderService.isLoading.next(this.requests.length > 0);
	}

	public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this.requests.push(req);

		this.loaderService.isLoading.next(true);

		return new Observable((observer: Observer<any>): any => {
			const sub: Subscription = next.handle(req)
				.subscribe(
					(event: any): any => {
						if (event instanceof HttpResponse) {
							this.removeRequest(req);
							observer.next(event);
						}
					},
					(err: HttpErrorResponse): void => {
						this.removeRequest(req);
						observer.error(err);
					},
					(): void => {
						this.removeRequest(req);
						observer.complete();
					});
			return (): void => {
				this.removeRequest(req);
				sub.unsubscribe();
			};
		});
	}
}
