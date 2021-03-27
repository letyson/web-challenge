import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterItemComponent } from './character-item.component';

const routes: Routes = [{ path: '', component: CharacterItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterItemRoutingModule { }
