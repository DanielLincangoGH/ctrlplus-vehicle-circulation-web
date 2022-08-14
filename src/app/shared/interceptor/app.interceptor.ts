import { LoaderService } from './../component/loader/loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, finalize, map, Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(
    private readonly loaderSrv: LoaderService,
    private snackBar: MatSnackBar
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderSrv.show();
    return next.handle(request).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          this.snackBar.open(error.error.message, 'Aceptar', {
            panelClass: ['error-toast'],
          });
        }
        return of(error);
      }),
      finalize(() => this.loaderSrv.hide())
    );
  }
}
