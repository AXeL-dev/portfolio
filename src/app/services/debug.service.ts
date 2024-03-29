import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DebugService {
  isDevEnv: boolean = !environment.production;

  constructor() {}

  /**
   * Print debug messages in browser console
   *
   * @param message
   * @param params
   */
  log(message: any, ...params: any): void {
    this.isDevEnv && console.log(message, ...params);
  }
}
