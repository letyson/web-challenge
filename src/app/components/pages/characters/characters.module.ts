import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharacterItemComponent } from './character-item/character-item.component';

import { CharacterListComponent } from './character-list/character-list.component';
//import { CharacterDetailsComponent } from './character-details/character-details.component';
import { AlertComponent } from '@shared/components/alert/alert.component';
import { BadgeComponent } from '@shared/components/badge/badge.component';


const myComponents = [BadgeComponent, CharacterItemComponent, CharacterListComponent, AlertComponent];

//const myComponents = [CharacterComponent, CharacterDetailsComponent, CharacterListComponent, AlertComponent];

@NgModule({
  declarations: [
    ...myComponents
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    ...myComponents
  ]
})
export class CharactersModule { }
