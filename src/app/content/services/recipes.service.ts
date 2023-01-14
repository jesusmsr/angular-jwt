import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private http: HttpClient
  ) { }

  private BASE_URL = 'http://127.0.0.1:8000';
  private URL_RECIPES = '/recipes';


  getAllRecipes() {
    return this.http.get<any>(this.BASE_URL + this.URL_RECIPES + '/');
  }


}
