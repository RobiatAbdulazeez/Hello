import { Component,Input } from '@angular/core';
import { Book } from '../helper/book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-display',
  standalone: true,
  imports: [FormsModule, BookDisplayComponent,CommonModule],
  templateUrl: './book-display.component.html',
  styleUrl: './book-display.component.scss'
})
export class BookDisplayComponent {

  //step 3 point 2
  @Input() book!: Book;

  constructor() { }

  ngOnInit(): void {
  }
}
