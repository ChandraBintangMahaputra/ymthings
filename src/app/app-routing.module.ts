import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MainLayoutComponent } from './template/main-layout/main-layout.component';
import { GiziComponent } from './pages/gizi/gizi.component';
import { KarboComponent } from './pages/articles/karbo/karbo.component';
import { SeratComponent } from './pages/articles/serat/serat.component';
import { LemakComponent } from './pages/articles/lemak/lemak.component';
import { ShidietComponent } from './pages/articles/shidiet/shidiet.component';
import { KaloriComponent } from './pages/articles/kalori/kalori.component';
import { HubungiKamiComponent } from './pages/hubungi-kami/hubungi-kami.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      {
        path: '', component: HomeComponent
        
      },
      {
        path: 'gizi', component: GiziComponent
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'articles/karbo', component: KarboComponent
      },
      {
        path: 'articles/serat', component: SeratComponent
      },
      {
        path: 'articles/lemak', component: LemakComponent
      },
      {
        path: 'articles/shidiet', component: ShidietComponent
      },
      {
        path: 'articles/kalori', component: KaloriComponent
      },
      {
        path: 'hubungi-kami', component: HubungiKamiComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
