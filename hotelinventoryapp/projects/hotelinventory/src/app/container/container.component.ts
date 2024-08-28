import {
  Component,
  AfterContentInit,
  OnInit,
  ContentChild,
  Host,
} from "@angular/core";
import { EmployeeComponent } from "../employee/employee.component";
import { RoomsService } from "../rooms/services/rooms.service";

@Component({
  selector: "app-container",
  standalone: true,
  imports: [],
  templateUrl: "./container.component.html",
  styleUrl: "./container.component.css",
  providers: [RoomsService],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor(@Host() roomsService: RoomsService) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = "Rick";
  }
}
