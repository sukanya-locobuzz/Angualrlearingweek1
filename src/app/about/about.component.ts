import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutList: string[] = [
    'Software Developer',
    'Loves Angular',
    'Enjoys problem-solving',
    'Based in India'
  ];

  firstName = 'Ada';
}

