import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Room, RoomList } from "../rooms";
import { environment } from "../../../environments/environment";
import { APP_SERVICE_CONFIG } from "../../AppConfig/appconfig.service";
import { AppConfig } from "../../AppConfig/appconfig.interface";

@Injectable({
  providedIn: "root",
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: "1",
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos:
        "https://images.stockcake.com/public/2/f/b/2fb656cf-bbed-45c2-b4c6-8fa4291f92a1_large/underwater-kiss-captured-stockcake.jpg",
      checkinTime: new Date("11-Nov-2011"),
      checkoutTime: new Date("12-Nov-2021"),
      rating: 4.5,
    },
    {
      roomNumber: "2",
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 1000,
      photos:
        "https://images.stockcake.com/public/a/7/7/a7756255-2a2b-4c41-a7c2-a8871b096c85_large/neon-sunset-glow-stockcake.jpg",
      checkinTime: new Date("11-Nov-2011"),
      checkoutTime: new Date("12-Nov-2021"),
      rating: 3.4,
    },
    {
      roomNumber: "3",
      roomType: "Private Suite",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 15000,
      photos:
        "https://images.stockcake.com/public/0/2/0/0204e121-d867-44be-96fd-099e2e6ec786_large/dewy-hanging-rose-stockcake.jpg",
      checkinTime: new Date("11-Nov-2011"),
      checkoutTime: new Date("12-Nov-2021"),
      rating: 2.6,
    },
  ];

  // constructor() {}
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient,
  ) {
    // console.log(environment.apiEndpoint);
    console.log(this.config.apiEndpoint);
    console.log("Rooms Service Initialized...");
  }

  getRooms() {
    return this.roomList;
  }

  deleteRoom() {
    if (this.roomList.length > 0) {
      this.roomList.pop();
    }
  }
}
