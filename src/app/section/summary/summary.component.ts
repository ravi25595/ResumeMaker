import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-summary',
  imports: [FormsModule],
  templateUrl: './summary.component.html',
  styleUrls: [
    '../../../shared/styles.scss',
    './summary.component.scss']
})
export class SummaryComponent {
  @Input() resume: any;
}
