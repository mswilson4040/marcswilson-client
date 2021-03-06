import { Component, OnInit } from '@angular/core';
import { ChadwickService } from '../../../services/chadwick.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-attendance-trend',
  templateUrl: './attendance-trend.component.html',
  styleUrls: ['./attendance-trend.component.scss']
})
export class AttendanceTrendComponent implements OnInit {
  private readonly _chadwickService: ChadwickService;
  constructor(_chadwickService: ChadwickService) {
    this._chadwickService = _chadwickService;
  }

  async ngOnInit() {
    const data = await this._chadwickService.getAttendanceTrend();
    this.buildChart(data);
  }
  async updateChart(filter?: { name: string, value: string }): Promise<void> {
  const data = await this._chadwickService.getAttendanceTrend(filter);
  this.buildChart(data);
  }
  buildChart(data): void {
    Highcharts.chart('attendanceTrend', {

      chart: {
        zoomType: 'x'
      },

      title: {
        text: `Attendance from ${data[0].yearID} - ${data[data.length - 1].yearID}`
      },

      subtitle: {
        text: 'Using the Boost module'
      },

      tooltip: {
        valueDecimals: 0
      },

      xAxis: {
        type: 'number',
        min: data[0]._id,
        max: data[data.length - 1]._id
      },

      series: [{
        data: data.map( d => [d._id, d.count]),
        lineWidth: 0.5,
        name: 'Total attendance'
      }]

    });
  }
}
