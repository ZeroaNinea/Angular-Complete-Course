import { Component, AfterContentInit, OnInit, Self } from "@angular/core";
import { RoomsService } from "../rooms/services/rooms.service";

@Component({
  selector: "app-employee",
  standalone: true,
  imports: [],
  templateUrl: "./employee.component.html",
  styleUrl: "./employee.component.css",
})
export class EmployeeComponent implements AfterContentInit, OnInit {
  empName: string = "John";

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {}
}
