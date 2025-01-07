import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../shared/models/pipes.module';
import { ReversePipe } from '../shared/pipes/reverse.pipe';

@Component({
  selector: 'app-reverse-pipe',
  imports: [FormsModule, PipesModule, ReversePipe],
  standalone: true,
  templateUrl: './reverse-pipe.component.html',
  styleUrl: './reverse-pipe.component.scss',
})
export class ReversePipeComponent {
  text = 'my dog has fleas.';
}
