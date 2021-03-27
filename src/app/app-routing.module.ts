import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'episode-list',
    pathMatch: 'full',

  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/pages/home/home.module').then(m => m.HomeModule)

  },
  {
    path: 'character-list',
    loadChildren: () =>
      import('./components/pages/characters/character-list/character-list.module').then(m => m.CharacterListModule)
  },

  {
    path: 'episode-list',
    loadChildren: () =>
      import('./components/pages/episode/episode-list/episode-list.module').then(m => m.EpisodeListModule)
  },
  {
    //path: 'character-item',
    path: 'character-item/:id',
    loadChildren: () =>
      import('./components/pages/characters/character-item/character-item.module').then(m => m.CharacterItemModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
