import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../service/api.service";

@Component({
  selector: "app-episodes",
  templateUrl: "./episodes.page.html",
  styleUrls: ["./episodes.page.scss"],
})
export class EpisodesPage implements OnInit {
  episodes: Array<any>;

  constructor(private service: ApiService, private router: Router) {}

  ngOnInit() {
    this.service.getEpisodes().then((response) => {
      this.episodes = response.results;
    });
  }
  goToEpisode(id) {
    this.router.navigateByUrl(`episode/${id}`);
  }
}
