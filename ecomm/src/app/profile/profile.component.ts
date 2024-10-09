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
  ReactiveFormsModule,
  FormArray,
} from "@angular/forms";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { toSignal, toObservable } from "@angular/core/rxjs-interop";

import { Observable } from "rxjs";

import { UserService } from "../login/store/user.service";
import { User } from "../login/store/user.state";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
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

  get addresses() {
    return this.profileForm.get("address") as FormArray;
  }

  private userService = inject(UserService);
  private fb = inject(FormBuilder);

  constructor(/*private userService: UserService*/) {
    this.user = toSignal(this.userService.getUser());
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      id: new FormControl({ value: "", disabled: true }, Validators.required),
      email: ["", Validators.required],
      phone: "",
      name: this.fb.group({
        firstname: ["", Validators.required],
        lastname: ["", Validators.required],
      }),
      address: this.fb.group({
        city: ["", Validators.required],
        street: "",
        number: "",
        zipcode: "",
        geolocation: this.fb.group({
          lat: ["", Validators.required],
          long: ["", Validators.required],
        }),
      }),
      // address: this.fb.array([this.prepareAddressForm()]),
    });
    this.loadProfile();
    // this.user$ = this.userService.getUser();
  }

  prepareAddressForm() {
    return this.fb.group({
      city: ["", Validators.required],
      street: "",
      number: "",
      zipcode: "",
      geolocation: this.fb.group({
        lat: ["", Validators.required],
        long: ["", Validators.required],
      }),
    });
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  resetAddress() {
    this.addresses.clear();
  }

  addControl() {
    this.addresses.push(this.prepareAddressForm());
  }

  loadProfile() {
    this.userService.getUser().subscribe((user) => {
      this.profileForm.patchValue(user);
    });
  }

  updateProfile() {
    this.userService
      .updateUser(this.profileForm.getRawValue())
      .subscribe((user) => {
        console.log(user);
      });
  }

  toggleEdit() {
    this.profileForm.enabled
      ? this.profileForm.disable()
      : this.profileForm.enable();
  }
}
