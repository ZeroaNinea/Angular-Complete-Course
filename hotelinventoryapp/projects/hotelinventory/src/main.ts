/// <reference types="@angular/localize" />

import { bootstrapApplication } from "@angular/platform-browser";
// import { NestFactory } from "@nestjs/core";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";
import {
  APP_SERVICE_CONFIG,
  APP_CONFIG,
} from "./app/AppConfig/appconfig.service";

// async function bootstrap() {
//   const app = await NestFactory.create(AppComponent);
//   await app.listen(3000);
// }

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
