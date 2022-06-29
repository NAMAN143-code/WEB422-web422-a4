import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const newReleases = require('./data/new-releases.json');
const albums = require('./data/albums.json');
const album = require('./data/album.json');
const artist = require('./data/artist.json');

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
