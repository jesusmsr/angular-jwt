import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private http: HttpClient
  ) { }

  private BASE_URL = 'http://127.0.0.1:8000';
  private URL_RECIPES = '/recipes';

  refreshRecipes: Subject<any> = new Subject();

  getAllRecipes() {
    return this.http.get<any>(this.BASE_URL + this.URL_RECIPES + '/');
  }

  createRecipe(recipe: any) {
    return this.http.post<any>(this.BASE_URL + this.URL_RECIPES + '/', {
      title: recipe.title,
      description: recipe.description
    });
  }


}
