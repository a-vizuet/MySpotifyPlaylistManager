import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';

const routes: Routes = [
  {
  path: '',
  component: AppComponent
  },
  {
    path: 'callback',
    component: AppComponent
  },
  {
    path: 'playlists',
    component: PlaylistsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
