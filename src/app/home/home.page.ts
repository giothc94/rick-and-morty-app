import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../service/api.service";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit{
  public characters:Array<any>;

  constructor(private ApiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.ApiService.getCharacters().then(result => {
      this.characters = result.results
    })
  }

  goCharacter(id) {
    this.router.navigateByUrl(`character/${id}`);
  }
}
