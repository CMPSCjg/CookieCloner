import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GameComponent } from './pages/game/game.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { SupportUsComponent } from './pages/support-us/support-us.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecipesService } from './services/recipes.service';
import { StoreBuildingComponent } from './components/store-building/store-building.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GameComponent,
    RecipesComponent,
    SupportUsComponent,
    PageNotFoundComponent,
    NavComponent,
    LoaderComponent,
    FooterComponent,
    StoreBuildingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
