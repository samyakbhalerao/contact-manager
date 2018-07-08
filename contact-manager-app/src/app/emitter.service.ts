import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {
  // Event store
  private static _emitters: { [ID: string]: EventEmitter<any> } = {};
  constructor() { }
  static get(ID: string): EventEmitter<any> {
    if (!this._emitters[ID]) 
        this._emitters[ID] = new EventEmitter();
    return this._emitters[ID];
}
}
