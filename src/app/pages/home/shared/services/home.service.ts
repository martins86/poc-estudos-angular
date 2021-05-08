import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

import { DataHome } from './../models/data-home.model';

import { CrudService } from '@shared/services/crud-operations/crud.service';

@Injectable()
export class HomeService extends CrudService<DataHome, number> {
  apiUrl = `${environment.api.baseUrl}`;
  constructor(protected _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}clients`);
  }
}
