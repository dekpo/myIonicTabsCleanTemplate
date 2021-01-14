import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private storageService: StorageService) {
  }

favArray = [];

ngOnInit(){
/*   this.storageService.getFavPhotos().then((fav) => {
    console.log('ngOnInit',fav)
    this.favArray = fav;
  }); */
}

ionViewWillEnter(){
  this.storageService.getFavPhotos().then((fav) => {
    console.log('ionViewWillEnter',fav);
    this.favArray = fav;
  });
    
}

}
