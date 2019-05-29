import Route from "@ember/routing/route";
import Config from "comics-app/config/environment";

import fetch from "fetch";

export default Route.extend({

  queryParams: {
    search: {
      refreshModel: true
    }
  },
  async model({ search = '' }) {
    return fetch(
      `http://localhost:3000/api?search=${search}`
    ).then(r => r.json());
  }
});
