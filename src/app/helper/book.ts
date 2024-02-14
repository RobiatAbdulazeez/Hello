// src/app/models/book.ts

//Step 2: Creating the Book Model
//Define the Book interface with properties 
export interface Book {
    title: string;
    description: string;
    author: string;
    cover: 'Hardcover' | 'Softcover';
    price: number;
  }
  //git config --global user.email "you@example.com"
 // git config --global user.name "Your Name"