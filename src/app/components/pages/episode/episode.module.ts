import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { EpisodeListComponent } from './episode-list/episode-list.component';

@NgModule({
  declarations: [EpisodeListComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [EpisodeListComponent]
})
export class EpisodeModule { }
