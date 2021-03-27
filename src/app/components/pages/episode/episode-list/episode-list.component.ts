import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Episode } from '@shared/interfaces/episode.interface';
import { EpisodeService } from '@shared/services/episode.service';
import { NgxPaginationModule } from 'ngx-pagination';
type RequestInfo = {
  next: string;
}
@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {
  episodes: Episode[] = [];
  info: RequestInfo = {
    next: null
  };

  totalLength: number;
  pageNum = 1;
  //private pageNum = 1;
  constructor(private episodeSvc: EpisodeService) { }

  ngOnInit(): void {
    this.getDataFromService();
  }
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
    this.episodeSvc
      .getEpisodes(this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {
        //console.log('Response->', res);
        const { info, results } = res;

        this.episodes = [...this.episodes, ...results];
        this.info = info;

      });

  }

}
