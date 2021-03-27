/* import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from './../../../shared/interfaces/character.interface';



@Component({
  selector: 'app-character',
  template: `
    <div class="card">
      <div class="image">
        <img [src]="character.image" [alt]="character.name" />
      </div>
      <div class="card-info">
        <h4>{{ character.name }}</h4>
        <p>{{ character.location.name }}</p>
        <div class="badge">{{ character.status }}</div>
      </div>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CharacterComponent {
  @Input() character: Character;
}
 */
