export abstract class FiguraGeometrica {
    variable:number 


    constructor(variable:number){
        this.variable = variable

    }
    abstract calcPerimetro(): number
}

// perimetro de un circulo 

export class Circulo extends FiguraGeometrica{
    constructor (variable:number){
        super(variable)
    }
    
    override calcPerimetro(): number {
        return 2 * 3.1416* this.variable;
    }
}


//Perimetro triangulo,escaleno y equilatero

export class Triangulo extends FiguraGeometrica{
    ladoA: number;
    ladoB: number;
    ladoC: number;

    constructor(variable: number, ladoA: number, ladoB: number, ladoC: number) {
        super(variable);
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
      }
    
    override calcPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}
