import { Oferta } from './shared/oferta.model'
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add;operator/toPromise'


export class OfertasService {

@Injectable()
constructor(private http: Http){}

        public getOfertas(): Promise<Oferta[]>
        //efetuar uma requisição Http
       return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((resposta: any) => resposta.json())
        //retornar um promise Oferta[]
    }
}
