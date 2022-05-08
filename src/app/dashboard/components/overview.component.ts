import { Component, OnInit } from '@angular/core';
import { DashboardService }  from 'src/app/dashboard/services/dashboard.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.dashboardService.getConnection().pipe().subscribe((data) => {
      console.debug(data);
    })
  }
}
