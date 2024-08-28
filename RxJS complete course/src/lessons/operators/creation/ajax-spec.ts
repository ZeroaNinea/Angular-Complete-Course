import axios from "axios";

import { ajax } from "rxjs/ajax";

export function ajaxSpec1() {
  axios
    .get("https://api.github.com/users?per_page=2")
    .then((response) => {
      // const githubUsers = `https://api.github.com/users?per_page=2`;

      // const users = ajax(githubUsers);
      const users: any = response;

      console.log(users);
      // const subscribe = users.subscribe(
      //   (res: any) => console.log(res),
      //   (err: any) => console.error(err),
      // );
    })
    .catch((error) => {
      console.error("Error fetching data for forkjoin-spec:", error);
    });
}

/* Just returns GitHub accounts. */

export function ajaxSpec2() {
  axios.get("https://api.github.com/error").then((response) => {
    const users = response;

    console.log(users);
  });
}
