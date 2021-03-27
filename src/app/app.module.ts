import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidemenuComponent } from './shared/components/sidemenu/sidemenu.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { CharacterItemModule } from './components/pages/characters/character-item/character-item.module'

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CharacterItemModule,
    NgxPaginationModule,

  ],
  exports: [NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
