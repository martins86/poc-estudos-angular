import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CrudOperationsModel } from './models/crud-operations.model';

export abstract class CrudService<T, ID> implements CrudOperationsModel<T, ID> {
  constructor(protected _http: HttpClient, protected _base: string) {}

  save(t: T): Observable<T> {
    return this._http.post<T>(this._base, t);
  }

  update(id: ID, t: T): Observable<T> {
    return this._http.put<T>(this._base + '/' + id, t, {});
  }

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(this._base + '/' + id);
  }

  findOne(id: ID): Observable<T> {
    return this._http.get<T>(this._base + '/' + id);
  }

  findAll(): Observable<T[]> {
    return this._http.get<T[]>(this._base);
  }
}
