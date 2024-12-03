import { Injectable } from '@angular/core';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // {
  //   "success": true,
  //   "user": {
  //       "id": 1,
  //       "username": "zachjwt",
  //       "hash": "0ca8aa825dd7192bd90e64f17885998b6e0f49f645c8089cb5bc07f02fc3347cf472cf952a31b85b55a506321e9a55370fc3dab6f87819265effcf4476f308ad",
  //       "salt": "f091e70bf72350ebfaa511455dcdbf0b01b97268f4b2619bc086c905744bcf78",
  //       "createdAt": "2024-12-03T18:46:36.000Z",
  //       "updatedAt": "2024-12-03T18:46:36.000Z"
  //   },
  //   "token": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTczMzI1ODQ0OCwiZXhwIjoxNzMzMzQ0ODQ4fQ.VA_c6bTdN_DLhUb5oaI3J14dzfoQL6wg1Hid524jBrUI12W3BpT9Mtdj37SjBAhpiIvg6BeAchsWXZv_hpITIxs615ULzsFZ3-0HMAVTPsAKbO5lA9PtxLJDJ7L1-LBsV4MDNu-q3423jAH_UW2-yQSkjx-fELL8YorFi8HS9zV0ZYCe-6ZccY1Xx3QSQwshQfEwjpfrLWQ5T8_ovjzuK-l25jBK0uaxeamCwX6zpOrufjwMQKMqcLW8o1xOM9X9ZHC5LQp8u3Hj6fSXkEmu6QrQ6VepkBnsHCHJzddqm9NRFsEMnXA4K2Vh3_gGRE1EV8nKeDIaMJHUDx7crB3M9kO4Ey81-kuTxiNDsKY7X-aES12m6Y0B4Urw6sFVU7WZyOjRpOo8wyZeBRJ-h9hXSWCzQF3t8eH_9mEGhtuSy91JdHq6V8oIhSNypPgE_AwnmznvyTZTyBxgW_2J68KDZfP8Ef24DYp7j5GQhIH74mqrrrNA3qiabBmjXb9pQruAS6IJWE-TCn9zLlKsZ3Ym3wxzvUJLjTj_yu-kryyr5O1OlGIFrkWEO_JxwyLKR8lKcqi58fpph76PHt7I0jDg-tWJx7WFD9xUi69SS8CGWjA5Z36YXXKn57NrKwwspi36y1Gq9Im6aRgUbd4EpBKevDI1YX8fKQZZ2rNxQfmK4F8",
  //   "expiresIn": "1d"
  // }

  setLocalStorage(responseObj: any) {
    const expires = moment().add(responseObj.expiresIn);

    localStorage.setItem('id_token', responseObj.token);
    localStorage.setItem('expires_at', JSON.stringify(expires.valueOf()));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires') as string;
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }
}
