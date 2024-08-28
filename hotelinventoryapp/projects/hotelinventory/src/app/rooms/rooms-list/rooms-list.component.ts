import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  Output,
  OnInit,
  EventEmitter,
  SimpleChanges,
  DoCheck,
  OnDestroy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoomList } from "../rooms";

@Component({
  selector: "app-rooms-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./rooms-list.component.html",
  styleUrls: ["./rooms-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, DoCheck, OnDestroy {
  @Input() rooms: RoomList[] = [];

  @Input() title: string = "";

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   // throw new Error("Method not implemented.");
  //   console.log(changes);
  //   if(changes['title']) {
  //     this.title = changes['title'].currentValue.toUpperCase();
  //   }
  // }

  ngDoCheck() {
    console.log("on changes is called");
  }

  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnDestroy() {
    console.log("on destroy is called");
  }
}
