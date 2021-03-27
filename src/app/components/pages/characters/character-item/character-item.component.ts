import { Component, Renderer2, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CharacterService } from '@shared/services/character.service';
import { Character } from './../../../../shared/interfaces/character.interface';

@Component({
  selector: 'app-character-item',

  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss']
})
export class CharacterItemComponent implements OnInit {

  @Input() character: Character;
  @Output() messageEvent = new EventEmitter<Object>();

  @ViewChild("name") name: ElementRef;
  @ViewChild("location") location: ElementRef;

  //characterCopy
  characterCopy: Character;
  message: { msg: String, type: String }
  word: String;

  constructor(
    private characterService: CharacterService, private renderer: Renderer2
  ) {

  }

  ngOnInit(): void {
    this.message = { msg: "Editing character", type: "success" };
    this.characterCopy = Object.assign({}, this.character);
    // this.getCharacter(this.idCharacter);
    console.log(this.characterCopy);

  }
  /*
    getCharacter(id: number): void {
      this.characterService.getCharacter(id)
        .subscribe(
          data => {
            this.characterCopy = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
   */
  updateCharacter(status): void {
    const data = {
      name: this.character.name,
      location: { name: this.character.location.name }
    };

    this.characterService.updateCharacter(this.character.id, data)
      .subscribe(
        response => {

          console.log(response);
          this.message = response;
        },
        error => {
          console.log(error);
          this.message = error;
        });
  }

  modelChangeLocation(value) {
    this.character.location.name = value;
    console.log(this.character)
  }

  sendName(event) {
    this.character.name = event.target.value;
    this.messageEvent.emit(this.character.name);
  }

  sendLocation(event) {
    this.character.location.name = event.target.value;
    this.messageEvent.emit(this.character.location.name);
  }

  reset() {
    this.character = Object.assign({}, this.characterCopy);
    this.message = { "msg": "Character reseted", "type": "success" };

    this.name.nativeElement.value = this.character.name;
    this.location.nativeElement.value = this.character.location.name;
  }

}


