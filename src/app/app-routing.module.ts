import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { ShowsComponent } from './shows/shows.component';
import { FaleComponent } from './fale/fale.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'integrantes', component: IntegrantesComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'fale', component: FaleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
