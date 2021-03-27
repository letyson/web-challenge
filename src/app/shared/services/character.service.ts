import { environment } from '@environment/environment'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Character } from '@shared/interfaces/character.interface'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(page = 1) {
    const filter = `${environment.baseUrlAPI}/character/?page=${page}`;
    /* const filter = `${environment.customUrlAPI}/character/`;
    console.log(filter); */
    return this.http.get<Character[]>(filter)

  }




  getCharacter(id: number): Observable<any> {
    return this.http.get<Character>(`${environment.baseUrlAPI}/character/${id}`)
  }

  updateCharacter(id: number, data: any): Observable<any> {
    //return this.http.patch<Character>(`${environment.customUrlAPI}/character/${id}`, data)
    return this.http.patch<Character>(`${environment.baseUrlAPI}/character/${id}`, data)
  }


  /*
    getCharacter(id: number) {
      return this.http.get<Character>(`${environment.baseUrlAPI}/character/${id}`)
    }

    updateCharacter(id: number, data: any) {
      //return this.http.patch<Character>(`${environment.customUrlAPI}/character/${id}`, data)
      return this.http.patch<Character>(`${environment.baseUrlAPI}/character/${id}`, data)
    }
   */
}
