import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartieComponent } from './components/partie/partie.component';
import { HomeComponent } from './components/home/home.component';
import { PartieDetailsComponent } from './components/partie-details/partie-details.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parties', component: PartieComponent },
  { path: 'parties/:id', component: PartieDetailsComponent },
  { path: 'details', component: DetailsComponent },
  { path: '', redirectTo: '/parties', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
