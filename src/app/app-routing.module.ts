import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/pages/home/home.component';
import { LoginComponent } from './content/pages/login/login.component';
import { ProfileComponent } from './content/pages/profile/profile.component';
import { RecipesComponent } from './content/pages/recipes/recipes.component';
import { AuthGuardService } from './content/services/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuardService], children: [
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
      { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuardService] }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
