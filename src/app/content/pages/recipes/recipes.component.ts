import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipesService } from '../../services/recipes.service';
import { RecipesFormComponent } from './recipes-form/recipes-form.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: any[] = [];

  constructor(
    private recipesService: RecipesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.retrieveRecipes();

    this.recipesService.refreshRecipes.subscribe(() => {
      this.retrieveRecipes();
    });
  }

  retrieveRecipes() {
    this.recipesService.getAllRecipes().subscribe((response) => {
      this.recipes = response;
    });
  }

  openRecipeForm() {
    this.dialog.open(RecipesFormComponent);
  }

}
