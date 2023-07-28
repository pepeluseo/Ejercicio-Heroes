// Esto es la antigua CLASE héroe que usábamos como modelo de datos.
// Ahora vamos a usar una interfaz, pero renombramos este archivo para no borrarlo.

export class Heroe {

    constructor(
        public nombre: string,
        public poder: number,
        public honor: number,
        public ataque: number,
        public defensa: number,
        public vida: number,
        public imagen: string
        ) {}
}
