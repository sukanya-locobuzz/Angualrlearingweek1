import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  showContactInfo = true; // Toggle this value to control visibility
  toggleContactInfo() {
    this.showContactInfo = !this.showContactInfo;
  }
}

