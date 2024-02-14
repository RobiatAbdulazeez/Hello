// src/app/book-list/book-list.component.ts

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Book } from '../helper/book';
import { BookDisplayComponent } from '../book-display/book-display.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  standalone: true,
  imports: [FormsModule, BookDisplayComponent,CommonModule] // Include FormsModule and BookDisplayComponent
})
export class BookListComponent {
  books: Book[] = [
    // Define your books here
    {
      title: 'Example Book 1',
      description: 'Description for Example Book 1',
      author: 'Author 1',
      cover: 'Hardcover',
      price: 29.99
    },
    {
      title: 'Example Book 2',
      description: 'Description for Example Book 2',
      author: 'Author 2',
      cover: 'Softcover',
      price: 299.99
    },
    {
      title: 'Example Book 3',
      description: 'Description for Example Book 3',
      author: 'Author 3',
      cover: 'Softcover',
      price: 39.99
    },
    {
      title: 'Example Book 4',
      description: 'Description for Example Book 4',
      author: 'Author 4',
      cover: 'Hardcover',
      price: 29.99
    }
  ];
  filteredBooks: Book[] = this.books;
  searchQuery: string = '';

  searchBooks(query: string): void {
    this.filteredBooks = this.books.filter(book =>
      // Filter logic here
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.description.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.cover.toLowerCase().includes(query.toLowerCase()) ||
      book.price.toString().includes(query)
    );
  }
}
