import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { Service1Component } from './service1/service1.component';
import { PagePackageComponent } from './page-package/page-package.component';
import { Service2Component } from './service2/service2.component';
import { AboutComponent } from './about/about.component';
import { JobComponent } from './job/job.component';
import { Service3Component } from './service3/service3.component';
import { ReserveDemoComponent } from './reserve-demo/reserve-demo.component';
import { TextSlideComponent } from './text-slide/text-slide.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'package-metier', component: PagePackageComponent },
  { path: 'serviceOdoo', component: Service1Component },
  { path: 'service2', component: Service2Component },
  { path: 'service3', component: Service3Component },
  { path: 'reserve-demo', component: ReserveDemoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'jobb', component: JobComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'accueil', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
