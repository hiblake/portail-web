import { dashboardService } from './../dahsboard.service';
import { Component, OnInit } from '@angular/core';
import {dashboard} from '../dashboard';
import { Router, Params } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public dashboards: dashboard[];

  constructor(private dashboardservice: dashboardService ,   private router: Router) {


   }

  ngOnInit() {
    }

    RedirectAddDocument(value){
      this.router.navigate(['/documentADD']);

    }
    RedirectListDocuments(value){

        this.router.navigate(['/document']);

    }
}
