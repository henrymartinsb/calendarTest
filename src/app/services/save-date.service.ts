import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class SaveDateService {

  public saveDate(key: string, value: Event) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getDate(key: string) {
      return localStorage.getItem(key);
    }

  public removeDate(key: string) {
    localStorage.removeItem(key);
  }

  public clearDate() {
    localStorage.clear();
  }
}
