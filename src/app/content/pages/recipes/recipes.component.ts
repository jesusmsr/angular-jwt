import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: any[] = [];

  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit(): void {
    this.recipesService.getAllRecipes().subscribe((response) => {
      this.recipes = response;
    });
  }

}
