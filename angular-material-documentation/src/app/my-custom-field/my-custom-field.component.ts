import {
  Component,
  forwardRef,
  Input,
  OnDestroy,
  Optional,
  Self,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatFormFieldControl,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Subject } from 'rxjs';
import { Validators } from '@angular/forms';
import { subscribe } from 'diagnostics_channel';
import { CommonModule } from '@angular/common';

export class MyTel {
  // The instance of this class store information about the phone number.
  constructor(
    public area: string,
    public exchange: string,
    public subscriber: string
  ) {}
}

@Component({
  selector: 'app-my-custom-field',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, // `NG_VALUE_ACCESSOR` provides the ControlVlaueAccessor for custom form creating.
      useExisting: forwardRef(() => MyCustomFieldComponent), // Use the existing component to create the form. `forwardRef` allows to refer to references which are not yet defined.
      multi: true, // `multi: true` allows to a single provider token to provide an array of elements.
    },
    {
      provide: MatFormFieldControl, // Provide the Angular Material interface for customizing forms.
      useExisting: forwardRef(() => MyCustomFieldComponent),
    },
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatLabel,
    MatIconModule,
  ],
  templateUrl: './my-custom-field.component.html',
  styleUrl: './my-custom-field.component.scss',
})
export class MyCustomFieldComponent
  implements ControlValueAccessor, MatFormFieldControl<MyTel>, OnDestroy
{
  // `ControlValueAccessor` is an interface for creating custom forms. `writeValue`, `rigisterOnChange`, `registerOnTouched` and `setDisabledState` are its methods.
  /*
    The `MatFormFieldControl` interface has getters, a setter, methods and properties that must be specified, otherwise the implementation error will be thrown: X [ERROR] TS2420: Class 'MyCustomFieldComponent' incorrectly implements interface 'ControlValueAccessor'.

    Required components, methods and properties:
    - Getters: `value`, `empty`, `shouldLabelFloat`.
    - Setter: `value`.
    - Methods: `writeValue`, `registerOnChange`, `registerOnTouched`, `setDescribedByIds`, `onContainerClick`.
    - Properties: `placeholder`, `required`, `disabled`, `stateChanges`, `focused`, `touched`, `id`, `errorState`.
  */

  static nextId = 0;
  @Input() placeholder: string = ''; // Display placeholder as an empty string in the form.
  @Input() required: boolean = false; // The initial value the form must be filled is `false`.
  @Input() disabled: boolean = false; // The initial value the form is disabled is `false`.

  stateChanges = new Subject<void>(); // This Subject is needed to update the form value when it changes.
  focused = false; // The initial value of focus is `false`.
  touched = false; // The initial value of touch is `false`.
  controlType = 'app-my-custom-field';
  id = `my-custom-field-${MyCustomFieldComponent.nextId++}`;
  errorState = false; // The form control is not in an error state.

  private innerValue: MyTel = new MyTel('', '', '');

  formGroup = new FormGroup({
    area: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
    exchange: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
    subscriber: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
    ]),
  });

  @Input()
  get value(): MyTel | null {
    return this.innerValue; // Returns the current value of the form, which is stored in the `innerValue` property.
  }
  set value(tel: MyTel | null) {
    this.innerValue = tel || new MyTel('', '', ''); // Reset the current value of the form and assign empty strings instead.
    // this.onChange(this.innerValue); // Assign the inner value of the form as the current value.
    this.formGroup.setValue({
      // Set the form value according to the `formGroup`.
      area: this.innerValue.area,
      exchange: this.innerValue.exchange,
      subscriber: this.innerValue.subscriber,
    });
    this.stateChanges.next(); // Pass the queue to the next Observer inside the Subject.
  }

  // value: MyTel | null = new MyTel('', '', '');
  private onChange = (tel: MyTel) => {};
  private onTouched = () => {};

  writeValue(tel: MyTel | null): void {
    // The method `writeValue` sets the initial value of the form. If it is not specified, uses the default value passed in, in this case the empty strings.
    this.value = tel || new MyTel('', '', '');
  }

  registerOnChange(fn: (tel: MyTel) => void): void {
    // These methods are called to set up callbacks, which notify the form when the component value changes or is touched (on change).
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    // These methods are called to set up callbacks, which notify the form when the component value changes or is touched (on click or focus).
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Implement logic if needed
  }

  onInputChange(): void {
    // this.onChange(this.innerValue);
    this.innerValue = new MyTel(
      this.formGroup.get('area')?.value || '',
      this.formGroup.get('exchange')?.value || '',
      this.formGroup.get('subscriber')?.value || ''
    );
    this.onChange(this.innerValue);
  }

  onBlur(): void {
    this.onTouched();
  }

  constructor(@Optional() @Self() public ngControl: NgControl) {
    // The `ngControl` dependency makes the component aware of its form control context, enabling compatibility with Angular forms.
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get empty(): boolean {
    // The `empty` method will return `true` if all form values ​​are empty.
    const { area, exchange, subscriber } = this.value || new MyTel('', '', '');
    return !area && !exchange && !subscriber;
  }

  get shouldLabelFloat(): boolean {
    // If the form is focused or not empty, return `true`.
    return this.focused || !this.empty;
  }

  onFocusIn() {
    // If the form is focused, set the `focused` property to `true` and pass the queue to the next Observer inside the Subject.
    this.focused = true;
    this.stateChanges.next();
  }

  onFocusOut() {
    // When focus is removed, set the `focused` property to `false`, set the `touched` property to `true`, call the `onTouched` method, and pass the queue to the next Observer inside the Subject.
    this.focused = false;
    this.touched = true;
    this.onTouched();
    this.stateChanges.next();
  }

  setDescribedByIds(ids: string[]): void {
    // A method to handle accessible descriptions.
    // Logic to handle accessible descriptions.
  }

  onContainerClick(event: MouseEvent): void {
    // A a method that determines behavior when the container is clicked.
    // Logic to handle container click.
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }
}
