import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superheroes: Observable<any>;
  publisher: string = '';

  constructor( private dataSrv: DataService) { }

  ngOnInit() {
    this.superheroes = this.dataSrv.getHeroes();

  }

  segmentChanged(event){
    this.publisher = (event.detail.value === 'todos' ? '' : event.detail.value);
  }

}
