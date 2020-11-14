import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();

  customYearValues: string[] = [];

  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) =>  {
          console.log(event);
        }
      },
      {
        text: 'Mundo',
        handler: () => {
          console.log('Mundo!');
        }
      },
    ]
  };

  constructor() { }

  ngOnInit() {

    const currentYear = (new Date()).getFullYear();
    const factor = 1;
    const cantidad = 4;
    const max = currentYear+factor;

    this.customYearValues.push(max.toString());
    this.customYearValues.push(currentYear.toString());
    for (let i = 1; i <= cantidad-2; i++) {
      this.customYearValues.push((currentYear - (i*factor)).toString());
    }
    console.log('customYearValues: ', this.customYearValues);
  }

  cambioFecha(event){
    console.log(event);
    console.log(new Date(event.detail.value));
  }
}
