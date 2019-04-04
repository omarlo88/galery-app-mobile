import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GaleryService {

    private host:string = "https://pixabay.com/api/";

  constructor(private http: HttpClient) { }

  getListeGaleries(nomVille: string, size:number, pageActuelle:number){
        return this.http.get(this.host + "?key=8000561-fb965d3bd2ba7696f0d46b078&q="+ nomVille+
            "&per_page="+size+"&page="+pageActuelle);
    }

}
