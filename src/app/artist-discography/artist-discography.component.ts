import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albumData from '../data/albums.json';
import artistData from '../data/artist.json';
import { MusicDataService } from '../music-data.service';


@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit, OnDestroy {
   albums = albumData.items.filter((curValue, index, self) => self.findIndex(t => t.name.toUpperCase() ===
   curValue.name.toUpperCase()) === index);
   artists = artistData;
  constructor(private data: MusicDataService, private route: ActivatedRoute ) { }
  private querySub : any;
  artist : any = {}
  album : any = {}
  ngOnInit(): void {

    this.querySub = this.data.getAlbumbyID(this.route.snapshot.params['id']).subscribe(data=> this.artist = data )
    this.querySub = this.data.getAlbumsbyArtistID(this.route.snapshot.params['id']).subscribe(data=> this.album = data.items )

    // code pending for now , moving forward with next component - 4:03 Pm
  }
  ngOnDestroy(): void {
      this.querySub?.unsubscribe();
  }
}
