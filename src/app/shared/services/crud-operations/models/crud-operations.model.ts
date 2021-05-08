import { Observable } from 'rxjs';

export interface CrudOperationsModel<T, ID> {
  save(t: T): Observable<T>;
  update(id: ID, t: T): Observable<T>;
  delete(id: ID): Observable<any>;
  findOne(id: ID): Observable<T>;
  findAll(): Observable<T[]>;
}
