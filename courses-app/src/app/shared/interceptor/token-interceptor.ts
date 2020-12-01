import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TOKEN} from '../../constant';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token: string = localStorage.getItem(TOKEN);
		if (token !== null) {
			req = req.clone({
				setHeaders: {
					Authorization: token,
				},
			});
		}
		return next.handle(req);
	}
}
