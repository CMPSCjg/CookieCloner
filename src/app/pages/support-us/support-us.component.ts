import { Component, OnInit } from '@angular/core';
import * as kanyeQuotes from '../../../public/mocks/kanye-quotes.json';

@Component({
  selector: 'app-support-us',
  templateUrl: './support-us.component.html',
  styleUrls: ['./support-us.component.css']
})
export class SupportUsComponent implements OnInit {

  kanyeQuotesAsArray: Array<any> = (kanyeQuotes as any).default;
  randomKanyeQuoteIndex = Math.floor(Math.random() * this.kanyeQuotesAsArray.length);

  constructor() { }

  ngOnInit(): void {
  }

  playDondaSound() {
    const audio = new Audio();
    audio.src = "../../../public/audio/donda.mp3";
    audio.load();
    audio.play();
  }

  openLink(website: string) {
    let url;

    switch (website) {
        case 'spotify': {
            url = 'https://open.spotify.com/album/340MjPcVdiQRnMigrPybZA';
            break;
        }
        case 'apple': {
            url = 'https://music.apple.com/us/album/donda/1583449420';
            break;
        }
        case 'tidal': {
            url = 'https://tidal.com/browse/album/195728118';
            break;
        }
        case 'github': {
            url = 'https://github.com/CMPSCjg/CookieCloner';
            break;
        }
        default: {
            url = 'https://www.youtube.com/playlist?list=PL8czsbhQP4tvew4t_V2PL-wUMbxIUdz4o'
        }
    }

    window.open(url, '_blank');
  }
}
