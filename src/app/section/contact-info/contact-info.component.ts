import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact-info',
  imports: [MatButtonModule, FormsModule],
  templateUrl: './contact-info.component.html',
  styleUrls: [
    '../../../shared/styles.scss',
    './contact-info.component.scss']
})
export class ContactInfoComponent {
  @Input() resume: any;
}
