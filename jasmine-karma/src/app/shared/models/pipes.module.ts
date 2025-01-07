import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../pipes/reverse.pipe';

@NgModule({
  declarations: [ReversePipe],
  imports: [CommonModule],
})
export class PipesModule {}
