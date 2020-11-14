import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  
  usuarios: Observable<any>;

  //ESTO SE USARÁ COMO REFERENCIA A LOS ELEMENTOS HTML DE TIPO IONLIST DE LA VISTA
  //EN ESTE CASO PARA CERRAR EL SLIDING AL CLICKAR EN UN BOTON DEL SLIDE
  @ViewChild(IonList) ionList: IonList;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsuarios();

  }

  favorite(user: any){
    console.log('favorite :>> ', user);
    this.ionList.closeSlidingItems();
  }

  share(user: any){
    console.log('share :>> ', user);
    this.ionList.closeSlidingItems();
  }

  delete(user: any){
    console.log('delete :>> ', user.name);
    this.ionList.closeSlidingItems();
  }




}
