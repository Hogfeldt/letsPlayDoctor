import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  public score: number;

  constructor() { 
    this.score = 0;
  }

  public scorePoints(days: number) {
    let score = 10 - days;

    if (score < 0) {
      score = 0;
    }

    this.score += score;
  }

  
}
