import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {

	public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(this.getRequestForApi(req));
	}

	private getRequestForApi(request: HttpRequest<any>): HttpRequest<any> {
		return request.clone({
			url: `api${request.url}`,
		});
	}

}