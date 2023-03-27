import { Book } from "./book";
import { User } from "./user";

export class Respuesta {

    public error:boolean;
    public codigo:number;
    public mensaje:string;
    public data:Book[];
    public result: User[];

    constructor(error:boolean, codigo:number, mensaje:string, data:Book[], result:User[]){

        this.error = error;
        this.codigo = codigo;
        this.mensaje = mensaje;
        this.data = data;
        this.result = result
            
}
}




