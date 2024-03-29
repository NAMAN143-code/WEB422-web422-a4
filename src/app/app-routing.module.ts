import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'artist/:id', component:ArtistDiscographyComponent},
  {path: 'newReleases', component: NewReleasesComponent},
  {path: 'album/:id', component:AlbumComponent},
  {path: '', component:NewReleasesComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
