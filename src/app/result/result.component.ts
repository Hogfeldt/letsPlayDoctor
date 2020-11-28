import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public days: string;


  constructor(private route: ActivatedRoute, public scoreService: ScoreService) {
    this.days = this.route.snapshot.paramMap.get("days")
  }

  ngOnInit(): void {
  }

}
