import { HttpClient, withRequestHandler } from "utils";

class CharacterService {
  constructor(name = "character") {
    this.name = name;
    this.httpClient = new HttpClient(name);
  }

  get({ id, params }) {
    return this.httpClient.GET({
      url: `/${id}`,
      params,
    });
  }

  getAll(params) {
    return this.httpClient.GET({ params });
  }
}

const service = new CharacterService();
export default withRequestHandler(service);
