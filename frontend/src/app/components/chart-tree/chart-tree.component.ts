import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import  More from 'highcharts/highcharts-more';
More(Highcharts);
import  Tree from 'highcharts/modules/treemap';
Tree(Highcharts);
import  Heatmap from 'highcharts/modules/heatmap';
Heatmap(Highcharts);
@Component({
  selector: 'app-chart-tree',
  templateUrl: './chart-tree.component.html',
  styleUrls: ['./chart-tree.component.scss']
})
export class ChartTreeComponent implements OnInit {

  Highcharts = Highcharts;
  linechart: any = {
    title: {
      text: 'Norwegian regions and counties by area'
    },
    subtitle: {
        text:
            'Source: <a href="https://snl.no/Norge" target="_blank">SNL</a>'
    },
    tooltip: {
        useHTML: true,
        pointFormat:
            "The area of <b>{point.name}</b> is <b>{point.value} km<sup>2</sup></b>"
    },
    colorAxis: {
      minColor: '#FFFFFF',
      maxColor: '#000000'
    },
    series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        levels: [{
          level: 1,
          layoutAlgorithm: 'sliceAndDice',
          dataLabels: {
              enabled: true,
              align: 'left',
              verticalAlign: 'top',
              style: {
                  fontSize: '15px',
                  fontWeight: 'bold'
              }
          }
      }],
        data: [{
          id: 'A',
          name: 'Nord-Norge',
          color: "#50FFB1"
          }, {
              id: 'B',
              name: 'Trøndelag',
              color: '#F5FBEF'
          }, {
              id: 'C',
              name: 'Vestlandet',
              color: "#A09FA8"
          }, {
              id: 'D',
              name: 'Østlandet',
              color: '#E7ECEF'
          }, {
              id: 'E',
              name: 'Sørlandet',
              color: '#A9B4C2'
          }, {
              name: 'Troms og Finnmark',
              parent: 'A',
              value: 70923
          }, {
              name: 'Nordland',
              parent: 'A',
              value: 35759
          }, {
              name: 'Trøndelag',
              parent: 'B',
              value: 39494
          }, {
              name: 'Møre og Romsdal',
              parent: 'C',
              value: 13840
          }, {
              name: 'Vestland',
              parent: 'C',
              value: 31969
          }, {
              name: 'Rogaland',
              parent: 'C',
              value: 8576
          }, {
              name: 'Viken',
              parent: 'D',
              value: 22768
          }, {
              name: 'Innlandet',
              parent: 'D',
              value: 49391
          },
          {
              name: 'Oslo',
              parent: 'D',
              value: 454
          },
          {
              name: 'Vestfold og Telemark',
              parent: 'D',
              value: 15925
          },
          {
              name: 'Agder',
              parent: 'E',
              value: 14981
        }]
      }],
    }

  constructor() { }

  ngOnInit(): void {
  }
}
