import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  tittle = "Hola desde Labs"
  welcome = 'Hola desde Welcome';
  tasks = signal([
  'instalar Angular cli',
  'Crear Proyecto',
  'Hola desde Lista'
  ]);
  
  nombre = signal ('Yesith Jimenez' );
  edad = 16;
  disabled = true;
  img = 'https://elcomercio.pe/resizer/agnne3tfHp7MsaZqVABZbMD8BJY=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg';

  person = signal({

    nombre: 'Juan',
    edad: 19,
    avatar: 'https://elcomercio.pe/resizer/agnne3tfHp7MsaZqVABZbMD8BJY=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg'

  });

  colorCtrl = new FormControl();

  constructor(){
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value)
    })
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
  changeedad(event: Event){
    const input = event.target as HTMLInputElement;
    const newvalue =  input.value;
    this.person.update(prevState =>  {
      return{
        ...prevState,
        edad: parseInt(newvalue,10)
      }
    });
  }

}
