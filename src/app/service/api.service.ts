import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor() {}

  getCharacters = () =>
    fetch(`https://rickandmortyapi.com/api/character`).then((response) =>
      response.json()
    );
  getCharacter = (id) =>
    fetch(`https://rickandmortyapi.com/api/character/${id}`).then((response) =>
      response.json()
    );
  getLocations = () =>
    fetch(`https://rickandmortyapi.com/api/location`).then((response) =>
      response.json()
    );
  getLocation = async (id) => {
    let response: Response = await fetch(
      `https://rickandmortyapi.com/api/location/${id}`
    );
    let location = await response.json();

    let fetchs: Array<Response> = location.residents.map((url) => fetch(url));

    let responses = await Promise.all(fetchs);

    let responsesToJson = responses.map((response) => response.json());

    location.residents = await Promise.all(responsesToJson);

    return location;
  };
  getEpisodes = () =>
    fetch(`https://rickandmortyapi.com/api/episode`).then((response) =>
      response.json()
    );
  getEpisode = async (id) => {
    let response: Response = await fetch(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    let episode = await response.json();
    let fetchs: Array<Response> = episode.characters.map((character) =>
      fetch(character)
    );
    let responses = await Promise.all(fetchs);
    let responsesToJson = responses.map((res) => res.json());
    episode.characters = await Promise.all(responsesToJson);
    return episode;
  };
}
