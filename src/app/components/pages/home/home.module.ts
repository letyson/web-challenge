import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CharactersModule } from '../characters/characters.module';
import { EpisodeModule } from '../episode/episode.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharactersModule,
    EpisodeModule
  ]
})
export class HomeModule { }
