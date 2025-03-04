import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartieComponent } from './components/partie/partie.component';
import { HomeComponent } from './components/home/home.component';
import { PartieDetailsComponent } from './components/partie-details/partie-details.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Déplace HomeComponent vers /home
  { path: 'parties', component: PartieComponent }, // Liste des parties
  { path: 'parties/:id', component: PartieDetailsComponent }, // Détails d’une partie
  { path: 'details', component: DetailsComponent }, // Route pour "details"
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige la racine (/) vers /home
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, // Redirection des routes non définies vers /home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
