import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MeteoService {

    private host:string = "https://api.openweathermap.org/data/2.5/forecast";
    private myKey : string = "93535fbd92f16f61c3b7a595d1cc56c0";

    constructor(private http: HttpClient){}

    getMeteo(nomVille: string){
        return this.http.get(this.host + "?q=" + nomVille+ "&APPID=" + this.myKey);
    }
}
