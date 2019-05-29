import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { inject } from "@ember/service";

export default Controller.extend({
  routing: inject('-routing'),
  

  startSearch(searchString) {
    this.routing.router.transitionTo({
      queryParams: {
        search: searchString
      }
    });
  }
});
