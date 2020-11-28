import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  public score: number;

  constructor() { 
    this.score = 0;
  }
}
