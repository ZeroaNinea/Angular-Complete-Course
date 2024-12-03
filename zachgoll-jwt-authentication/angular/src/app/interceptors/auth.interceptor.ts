import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('id_token');

  // console.log(token);

  if (token) {
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', token),
    });
    return next(clonedRequest);
  } else {
    return next(req);
  }
};
