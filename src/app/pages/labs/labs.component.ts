import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  tittle = "Hola desde Labs"
  welcome = 'Hola desde Welcome';
  tasks = [
  'instalar Angular cli',
  'Crear Proyecto',
  'Hola desde Lista'
  ];
  
  nombre = signal ('Yesith Jimenez' );
  edad = 16;
  disabled = true;
  img = 'https://elcomercio.pe/resizer/agnne3tfHp7MsaZqVABZbMD8BJY=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg';

  person = {

    nombre: 'Yesith',
    edad: 22,
    avatar: 'https://elcomercio.pe/resizer/agnne3tfHp7MsaZqVABZbMD8BJY=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg'

  }
  clickHandler(){
    alert('Hola desde Alert')
  }
  changeHandle(event: Event){
    const input = event.target as HTMLInputElement;
    const newvalue =  input.value;
    this.nombre.set(newvalue);
  }
  keydowHandle(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

}
