import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  recettes: any;
  http: HttpClient;
  urlApi = 'http://localhost:3000/api/recette';

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  getService() {
    return this.http.get(this.urlApi);
  }



  deleteService(id: String) {
    return this.http.delete('http://localhost:3000/api/recette/' + id);
  }
  addService (
    titre: string,
    description: string,
    pdf: any,
    image: any,
   ){
    const body = new FormData();
    body.append('titre', titre);
    body.append('description', description);
    body.append('file', pdf);
    body.append('file', image);


    return this.http.post(this.urlApi, body);
   }
}
