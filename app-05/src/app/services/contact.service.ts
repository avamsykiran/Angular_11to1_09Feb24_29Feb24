import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  api: string;

  constructor(private httpClient: HttpClient) {
    this.api = "http://localhost:9999/contacts";
  }

  getAll(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.api)
      .pipe(map(contacts => contacts.map(c => ({ ...c, dateOfBirth: new Date(c.dateOfBirth) }))));
  }

  getById(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(this.api + "/" + id)
      .pipe(map(c => ({ ...c, dateOfBirth: new Date(c.dateOfBirth) })));
  }

  add(c: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(this.api, c);
  }

  update(c: Contact): Observable<Contact> {
    return this.httpClient.put<Contact>(this.api + "/" + c.id, c);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.api + "/" + id);
  }
}
