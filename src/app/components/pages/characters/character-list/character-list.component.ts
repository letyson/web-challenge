import { Component, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { Character } from '@shared/interfaces/character.interface';
import { CharacterService } from '@shared/services/character.service';
import { CharacterItemComponent } from './../character-item/character-item.component';

import { TrackHttpError } from '@shared/models/TrackHttpError';
type RequestInfo = {
  next: string;
}


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  //@ViewChild(CharacterItemComponent) child;
  characters: Character[] = [];
  info: RequestInfo = {
    next: null
  };
  currentCharacter = null;
  currentIndex = -1;

  private pageNum = 1;

  randomColor = '#FFFFFF';


  constructor(private characterSvc: CharacterService) { }

  ngOnInit(): void {

    this.getDataFromService();
  }

  /*   ngAfterViewInit() {
      this.currentCharacter = this.child.character
      console.log(this.child.character)
    } */

  nextPage(): void {
    if (this.info.next) {
      this.pageNum++;
      this.getDataFromService();
    }
  }

  previuosPage(): void {
    if (this.pageNum > 1) {
      this.pageNum--;
      this.getDataFromService();
    }
  }


  private getDataFromService(): void {
    this.characterSvc
      .getCharacters(this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {
        /*      console.log('Response->', res);
             const { info, results } = res;
             this.characters = [...this.characters, ...results];
             this.info = info; */

        if (res?.results?.length) {
          const { info, results } = res;
          this.characters = [...this.characters, ...results];
          this.info = info;
        } else {
          this.characters = [];
        }
      }, (error: TrackHttpError) => console.log((error.friendlyMessage)));


  }

  setInactiveTutorial(): void {
    this.currentCharacter = null;
    this.currentIndex = -1;
  }

  setActiveCharacter(event, character, index): void {
    this.currentCharacter = character;
    this.currentIndex = index + 1; //Because index starts in 0
    /* console.log(this.currentCharacter);
    console.log(this.currentIndex);
    console.log(event); */
  }

  getCurrentIndex() {
    return this.currentIndex;
  }


  //communication with children
  receiveMessage($event) {
    this.currentCharacter.name = $event;
  }
}

