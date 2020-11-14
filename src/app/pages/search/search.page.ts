import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  albums: any[] = [];
  textoBuscar: string = '';

  constructor(private dataSrv: DataService) { }

  ngOnInit() {
    this.dataSrv.getAlbums().subscribe( albumes => {
      this.albums = albumes;
    });
  }

  onSearchChange(event){
    this.textoBuscar = event.detail.value;
  }

}
