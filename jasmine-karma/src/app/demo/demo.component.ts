import { Component } from '@angular/core';

import { Child1Component } from '../child-1/child-1.component';
import { Child2Component } from '../child-2/child-2.component';
import { Child3Component } from '../child-3/child-3.component';
import { ExternalTemplateComponent } from '../external-template/external-template.component';
import { InnerCompWithExternalTemplateComponent } from '../inner-comp-with-external-template/inner-comp-with-external-template.component';
import { InputValueComponent } from '../input-value/input-value.component';
import { IoParentComponent } from '../io-parent/io-parent.component';
import { LightswitchComponent } from '../lightswitch/lightswitch.component';
import { NeedsContentComponent } from '../needs-content/needs-content.component';
import { ReversePipeComponent } from '../reverse-pipe/reverse-pipe.component';
import { MyIfParentComponent } from '../my-if-parent/my-if-parent.component';
import { MasterService } from '../services/master/master.service';
import { ValueService } from '../services/value/value.service';

@Component({
  selector: 'app-demo',
  imports: [
    // Child1Component,
    // Child2Component,
    // Child3Component,
    // ExternalTemplateComponent,
    // InnerCompWithExternalTemplateComponent,
    // InputValueComponent,
    // IoParentComponent,
    // LightswitchComponent,
    // NeedsContentComponent,
    // ReversePipeComponent,
    // MyIfParentComponent,
  ],
  standalone: true,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {}

export const demoProviders = [MasterService, ValueService];
