import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../services/photos.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  // on récup la route active pour le paramètre id
  // on récup notre photos service
  constructor(
    private activatedRoute:ActivatedRoute, 
    private photoService: PhotosService,
    private storageService: StorageService) { }
  
    // on définit l'index du tableau de photos à zéro
    photoIndex = 0;
    // on déclare notre élément pour l'utiliser dans la page de détails
    photoDetails = this.photoService.data[ this.photoIndex ];

    addedToFav = false; // par defaut l'image n'est pas favorite
    // le tableau des favoris est vide au départ
    favArray = [];
    // c'est la méthode d'ajout qui récup les données en mémoire
    // avant d'ajouter la photo dans le tableau à mémoriser
    async addToFavorites(){
      const data = await this.storageService.getFavPhotos();
      this.favArray = data ? data : [];
      this.favArray.push(this.photoDetails);
      this.storageService.setFavPhotos(this.favArray);
      this.addedToFav = true;
      console.log( data );
    }



  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {
      // on recherche l'index du tableau de photos correspondant à l'id récupéré
      // en paramètre
      this.photoIndex = this.photoService.data.findIndex( item => item.id == params.id );
      // on doit réaffecter les données de la photo correspondant à l'index
      this.photoDetails = this.photoService.data[ this.photoIndex ];
      // on recherche si cette photo est présente dans les favoris
      this.storageService.getFavById( params.id ).then((index) => {
        console.log('La photo est dans les favoris ?: ', index);
        if (index!=-1) this.addedToFav = true;
      })
    });

  }

}
