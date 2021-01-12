import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../service/api.service";

@Component({
  selector: "app-location",
  templateUrl: "./location.page.html",
  styleUrls: ["./location.page.scss"],
})
export class LocationPage implements OnInit {
  location = {};
  loadReady = false;

  constructor(private service: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params.id;
      this.service.getLocation(id).then((location) => {
        this.location = location;
        console.log(this.location);
        this.loadReady = true;
      });
    });
  }
}
