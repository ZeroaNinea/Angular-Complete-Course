import {
  Component,
  ViewChild,
  ViewContainerRef,
  OnInit,
  AfterViewInit,
  ElementRef,
  Optional,
  Provider,
  Inject,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RoomsComponent } from "./rooms/rooms.component";
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";
import { APP_SERVICE_CONFIG, APP_CONFIG } from "./AppConfig/appconfig.service";
import { LoggerService } from "./logger.service";
import { AppConfig } from "./AppConfig/appconfig.interface";
import { RoomsService } from "./rooms/services/rooms.service";
import { localStorageToken } from "./localstorage.token";
import { authInterceptor } from "./auth.interceptor";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    RoomsComponent,
    ContainerComponent,
    EmployeeComponent,
    HttpClientModule,
  ],
  templateUrl: "./app.component.html",
  // template: `
  //   <h1>"Hello World!" form the \`app.component.ts\` file.</h1>
  //   <p>Angular is Awesome</p>
  // `,
  styleUrls: ["./app.component.css"],
  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //     }
  //   `,
  // ],
  providers: [
    { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG },
    RoomsService,
    // { provide: requestInterceptor },
    { provide: HTTP_INTERCEPTORS, useValue: authInterceptor, multi: true },
  ],
})
export class AppComponent implements OnInit {
  title = "hotelinventory";

  @ViewChild("name", { static: true }) name!: ElementRef;

  // @ViewChild("user", { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: Storage,
  ) {
    // this.testLocalStorage();
  }

  ngOnInit() {
    this.localStorage.setItem("name", "Hilton Hotel");

    this.loggerService?.log("AppComponent.ngOnInit()");
    this.name.nativeElement.innerText = "Hilton Hotel";
  }

  ngAfterViewInit() {}
  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
