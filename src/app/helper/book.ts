// src/app/heler/book.ts

//Step 2: Creating the Book Model
//Define the Book interface with properties 
export interface Book {
    title: string;
    description: string;
    author: string;
    cover: 'Hardcover' | 'Softcover';
    price: number;
  }
  