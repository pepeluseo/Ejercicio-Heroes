import {Injectable} from '@angular/core';
import {Heroe} from "../models/heroe.model";


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public urlImagenesExt: string = "https://borilio.github.io/curso-angular/img/avatars/";

  constructor() {
  }

  public getHeroes(): Heroe[] {
    let listadoHeroes: Heroe[] =
      [
        {
          nombre: "Superman",
          imagen: this.urlImagenesExt + "superman.svg",
          ataque: 80,
          defensa: 93,
          poder: 350,
          honor: 94,
          vida: 100
        },
        {
          nombre: "Batman",
          imagen: this.urlImagenesExt + "batman.svg",
          ataque: 60,
          defensa: 75,
          poder: 50,
          honor: 75,
          vida: 100
        },
        {
          nombre: "Capitana Marvel",
          imagen: "",
          ataque: 79,
          defensa: 80,
          poder: 300,
          honor: 70,
          vida: 100
        },
        {
          nombre: "Catwoman",
          imagen: "",
          ataque: 63,
          defensa: 72,
          poder: 50,
          honor: -5,
          vida: 100
        },
        {
          nombre: "Spiderman",
          imagen: this.urlImagenesExt + "spiderman.svg",
          ataque: 86,
          defensa: 89,
          poder: 150,
          honor: 85,
          vida: 100
        },
        {
          nombre: "Viuda Negra",
          imagen: "",
          ataque: 88,
          defensa: 83,
          poder: 35,
          honor: 37,
          vida: 100
        },
        {
          nombre: "Thanos",
          imagen: "",
          ataque: 90,
          defensa: 95,
          poder: 250,
          honor: -92,
          vida: 100
        },
        {
          nombre: "Linterna Verde",
          imagen: this.urlImagenesExt + "linternaverde.svg",
          ataque: 82,
          defensa: 83,
          poder: 200,
          honor: 80,
          vida: 100
        },
        {
          nombre: "Ironman",
          imagen: this.urlImagenesExt + "ironman.svg",
          ataque: 83,
          defensa: 85,
          poder: 150,
          honor: 69,
          vida: 100
        },
        {
          nombre: "Capitán America",
          imagen: this.urlImagenesExt + "capitanamerica.svg",
          ataque: 64,
          defensa: 95,
          poder: 135,
          honor: 95,
          vida: 100
        },
        {
          nombre: "Thor",
          imagen: "",
          ataque: 92,
          defensa: 75,
          poder: 275,
          honor: 60,
          vida: 100
        }
      ];
    return listadoHeroes;
  }

}
