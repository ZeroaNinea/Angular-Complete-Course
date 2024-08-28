import {
  Component,
  ViewChild,
  ViewChildren,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  QueryList,
  SkipSelf,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbAlert } from "@ng-bootstrap/ng-bootstrap";
import { Room, RoomList } from "./rooms";
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from "./header/header.component";
import { RoomsService } from "./services/rooms.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-rooms",
  standalone: true,
  imports: [CommonModule, NgbAlert, RoomsListComponent, HeaderComponent],
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.css"],
})
export class RoomsComponent
  implements AfterViewInit, AfterViewChecked, DoCheck
{
  hotelName = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms = true;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = "Room List";

  roomList: RoomList[] = [];

  stream = new Observable((observer) => {
    observer.next("user1");
    observer.next("user2");
    observer.next("user3");
    observer.complete();
    observer.error("error");
  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(@SkipSelf() private roomsService: RoomsService) {}

  ngOnInit(): void {
    // console.log(this.headerComponent);
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log("complete"),
      error: (err) => console.log(err),
    });
    this.stream.subscribe((data) => console.log(data));
    this.roomList = this.roomsService.getRooms();
  }

  ngDoCheck() {
    console.log("on changes is called");
  }

  ngAfterViewInit() {
    this.headerComponent.title = "Rooms View";

    console.log((this.headerChildrenComponent.last.title = "Last Title"));
  }

  ngAfterViewChecked() {}

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: "4",
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos:
        "https://images.unsplash.com/photo-1720983685929-3ed3309aed63?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      checkinTime: new Date("11-Nov-2011"),
      checkoutTime: new Date("12-Nov-2021"),
      rating: 4.5,
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: "3",
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos:
        "https://images.unsplash.com/photo-1720983685929-3ed3309aed63?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      checkinTime: new Date("11-Nov-2011"),
      checkoutTime: new Date("12-Nov-2021"),
      rating: 4.5,
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

  deleteRoom() {
    this.roomsService.deleteRoom();
    this.roomList = this.roomsService.getRooms(); // Update the local list
  }

  // ngOnDestroy() {
  //   console.log("on destroy is called");
  // }
}
