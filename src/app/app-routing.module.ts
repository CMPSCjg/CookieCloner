import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { GameComponent } from './pages/game/game.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { SupportUsComponent } from './pages/support-us/support-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cookie-cloner/about', component: AboutComponent },
  { path: 'cookie-cloner/game', component: GameComponent },
  { path: 'cookie-cloner/recipes', component: RecipesComponent },
  { path: 'cookie-cloner/support-us', component: SupportUsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
