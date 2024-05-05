import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { MainLayoutComponent } from './template/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ReactiveFormsModule } from '@angular/forms';
import { GiziComponent } from './pages/gizi/gizi.component';
import { KarboComponent } from './pages/articles/karbo/karbo.component';
import { SeratComponent } from './pages/articles/serat/serat.component';
import { LemakComponent } from './pages/articles/lemak/lemak.component';
import { ShidietComponent } from './pages/articles/shidiet/shidiet.component';
import { KaloriComponent } from './pages/articles/kalori/kalori.component';
import { HubungiKamiComponent } from './pages/hubungi-kami/hubungi-kami.component'; 
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    HomeComponent,
    AboutComponent,
    GiziComponent,
    KarboComponent,
    SeratComponent,
    LemakComponent,
    ShidietComponent,
    KaloriComponent,
    HubungiKamiComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
