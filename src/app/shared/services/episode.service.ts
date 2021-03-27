import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '@environment/environment'

import { Episode } from '@shared/interfaces/episode.interface'

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  getEpisodes(page = 1) {
    const filter = `${environment.baseUrlAPI}/episode/?page=${page}`;
    return this.http.get<Episode[]>(filter)

  }
}
