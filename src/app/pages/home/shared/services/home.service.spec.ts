import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { DataHome } from '../models/data-home.model';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService],
    });
    service = TestBed.inject(HomeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Testing GET findAll', () => {
    it('should be return all Clients', () => {
      // Arrange
      const dummyClients: DataHome[] = [
        {
          id: 1,
          name: 'Any Name One',
          email: 'fake_01@email.com',
        },
        {
          id: 2,
          name: 'Hello World2',
          email: 'fake_02@email.com',
        },
      ];

      // Act & Assert
      service.findAll().subscribe((clients) => {
        expect(clients.length).toBe(2);
        expect(clients).toEqual(dummyClients);
      });
      const request = httpMock.expectOne(`${service.apiUrl}clients`);
      expect(request.request.method).toBe('GET');
      request.flush(dummyClients);
    });
  });
});
