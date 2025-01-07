import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: 'appInputValueBinder[value]',
})
export class InputValueBinderDirective {
  @HostBinding() @Input() value: any;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @HostListener('input', ['$event.target.value'])
  onInput(value: any) {
    this.valueChange.emit(value);
  }
}
