
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos-ag';
  email = "edu@email.com"
  btnDisabled = true

  contadorOvejas = 1;
  listaPersonas: string[] =[]
  
  boxStyles = {
    background: 'black',
    width: 100,
    height: 100
  }

  registroInputs = {
    email: '',
    passkey: ''
  }


  handlerRegistro() {
    console.log(this.registroInputs)
  }

  pokedex: Pokemon[] = []
 

  persona:  {
    nombre: string,
    edad?:number
  } = {  
    nombre: ''
  }

  mostrarAlerta() {
    alert('Alera de event binding')  
  }

  agregarPersona() {
    this.listaPersonas.push(this.persona.nombre)
    this.persona.nombre = ''
  }
 

  contarOveja() {
    this.contadorOvejas += 1;
  }
 
  nuevoPokemon: string = ''


  ngOnInit(): void {
    console.log('ngOnInit start...')
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=8&offset=${Math.floor(Math.random() * 250)}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.pokedex = data.results
      })
      .then(() => console.log('ngOnInit end...'))
 
 
  }


 
}
