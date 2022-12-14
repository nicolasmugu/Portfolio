import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentNameComponent } from './component-name/component-name.component'
@NgModule({
  declarations: [
    AppComponent,
      ContactoComponent,
      ResumenComponent,
      ProyectoComponent,
      AboutComponent,
      FooterComponent,
      HeaderComponent,
      PageNotFoundComponent,
      ComponentNameComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
