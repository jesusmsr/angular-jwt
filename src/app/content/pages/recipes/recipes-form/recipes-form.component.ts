import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RecipesService } from 'src/app/content/services/recipes.service';

@Component({
  selector: 'app-recipes-form',
  templateUrl: './recipes-form.component.html',
  styleUrls: ['./recipes-form.component.css']
})
export class RecipesFormComponent implements OnInit {

  recipesForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.recipesForm = this.fb.group({
      title: [''],
      description: ['']
    });
  }

  submit() {
    if (this.recipesForm.valid) {
      this.recipeService.createRecipe({
        title: this.recipesForm.value.title,
        description: this.recipesForm.value.description
      }).subscribe((response) => {
        this.recipeService.refreshRecipes.next(null);
        this.dialog.closeAll();
      });
    }
  }

}
