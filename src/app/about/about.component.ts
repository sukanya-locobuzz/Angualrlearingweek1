import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
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
}

