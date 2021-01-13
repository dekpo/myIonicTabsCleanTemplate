import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  public data = [
    {
      id: 12,
      url: '../../assets/photos/action-1838330_1280.jpg',
      title: 'Action Falling',
      author: 'Bob Lazar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 23,
      url: '../../assets/photos/beard-1845166_1280.jpg',
      title: 'Big Beard',
      author: 'Roger Dubois',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 45,
      url: '../../assets/photos/beautiful-2405131_1920.jpg',
      title: 'Beauty Hairy',
      author: 'Bonny & Clide',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 56,
      url: '../../assets/photos/beauty-863439_1280.jpg',
      title: 'Beauty Hat',
      author: 'Stanley River',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 67,
      url: '../../assets/photos/building-102840.jpg',
      title: 'Building Louvre',
      author: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 78,
      url: '../../assets/photos/drink-84533_1920.jpg',
      title: 'Just a Drink',
      author: 'Lazy Bone',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 89,
      url: '../../assets/photos/fish-3322230_1920.jpg',
      title: 'Under Water',
      author: 'Bob Marley',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 90,
      url: '../../assets/photos/mountain-landscape-2031539.jpg',
      title: 'In the Mountain',
      author: 'Stefan Stan',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 93,
      url: '../../assets/photos/road-220058_640.jpg',
      title: 'Road to Desert',
      author: 'Bob léponge',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 26,
      url: '../../assets/photos/road-1072823.jpg',
      title: 'Road to Even',
      author: 'Pierre Tombale',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 33,
      url: '../../assets/photos/the-road-815297.jpg',
      title: 'The Road',
      author: 'Marie Dupont',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

  constructor() { }
  
}
