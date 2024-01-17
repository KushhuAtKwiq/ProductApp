import { catchError, Observable, take } from 'rxjs';

export class Perform<T> {
  products: T | undefined;
  isLoading = false;
  hasError = false;
  private action$: Observable<T> | undefined;

  load(action$: Observable<T>): void {
    this.isLoading = true;
    this.hasError = false;
    this.action$ = action$;
    this.action$
      .pipe(
        catchError(() => {
          this.products = undefined;
          this.isLoading = false;
          this.hasError = true;
          return [];
        })
      )
      .subscribe((data: T) => {
        this.products = data;
        this.isLoading = false;
        this.hasError = false;
      });
  }
}
