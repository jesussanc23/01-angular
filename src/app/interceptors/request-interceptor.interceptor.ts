import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  let request = req;
  let token: string = localStorage.getItem('tokenAuth') ?? '';
  if ( token ) {
    request = req.clone({headers: req.headers.set('Authorization', token)})
  }
  return next(request);
};
