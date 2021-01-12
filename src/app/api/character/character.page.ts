import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/service/api.service";

@Component({
  selector: "app-character",
  templateUrl: "./character.page.html",
  styleUrls: ["./character.page.scss"],
})
export class CharacterPage implements OnInit {
  id = null;
  character = {};

  constructor(
    private activeRoute: ActivatedRoute,
    private service: ApiService
  ) {}

  ngOnInit() {
    // obtengo id de la ruta
    this.id = this.activeRoute.snapshot.paramMap.get("id");

    // llamo servicio y le paso el id
    this.service.getCharacter(this.id).then((character) => {
      this.character = character;
    });
  }
}
