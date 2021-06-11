import { Injectable, OnInit } from '@angular/core';
import DOGS from './dogdata.json'
import {Observable, of } from 'rxjs';
import { Dog} from './dog';

@Injectable({
  providedIn: 'root' 
})
export class DogsService implements OnInit {
  private dogData = DOGS;

  all(): Observable<Dog[]>{
    return of (this.dogData);
  }
  get(dogid): Observable<Dog[]>{
    return of (this.dogData)
  }
  constructor() { }
  ngOnInit(): void {
    
  }
}
