import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../service/api.service";

@Component({
  selector: "app-episode",
  templateUrl: "./episode.page.html",
  styleUrls: ["./episode.page.scss"],
})
export class EpisodePage implements OnInit {
  episode = {};
  loadReady = false;

  constructor(private route: ActivatedRoute, private service: ApiService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params.id;
      this.service.getEpisode(id).then((episode) => {
        this.episode = episode;
        this.loadReady = true;
      });
    });
  }
}
