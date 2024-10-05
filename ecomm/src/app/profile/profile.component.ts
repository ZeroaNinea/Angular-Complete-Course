import {
  Component,
  OnChanges,
  OnInit,
  signal,
  Signal,
  computed,
  inject,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";

import { toSignal, toObservable } from "@angular/core/rxjs-interop";

import { Observable } from "rxjs";

import { UserService } from "../login/store/user.service";
import { User } from "../login/store/user.state";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.scss",
})
export class ProfileComponent implements OnInit {
  // user = signal({});
  // user$!: Observable<User>;
  user!: Signal<User | undefined>;
  fullName = computed(() => {
    const user = this.user();
    return user ? `${user.name.firstname} ${user.name.lastname}` : "";
  });

  profileForm!: FormGroup;

  private userService = inject(UserService);
  private fb = inject(FormBuilder);

  constructor(/*private userService: UserService*/) {
    this.user = toSignal(this.userService.getUser());
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      id: new FormControl(this.user()?.id),
      email: this.user()?.email,
      phone: this.user()?.phone,
      address: this.fb.group({
        city: ["", Validators.required],
        street: this.user()?.address.street,
        number: this.user()?.address.number,
        zipcode: this.user()?.address.zipcode,
        geolocation: this.fb.group({
          lat: ["", Validators.required],
          long: ["", Validators.required],
        }),
      }),
    });
    // this.user$ = this.userService.getUser();
  }
}
