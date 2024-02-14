# Bookstore
# Bookstore
A client approaches you and would like to build a bookstore... With their first iteration for the project they are open to some design concepts but some things MUST be included

Create a new angular project with an appropriate name
Users (library visitors) want to be able to open the application, view and search books that are available.
Each book has a title, description, author, cover (Hardcover or Softcover), price
All books by default should be surrounded by a border. Any and all book information should be within the border. The display for each book should exist in its own component.
The price field should be prefixed by a '$' and the price itself should be displayed in green.
For the search, the user should be able to search for any properties of the book NOT JUST THE TITLE
Specifications: Must use an interface, must use @Input decorator at least once with an object, must use ngFor, must create at least one component


STEP 1
Strated by using the sudo npm install -g @angular/cli to generate my angular cli
ng new project-name to create a new project name
ng serveto see if my application is working fine

STEP 2
created a helper directory // src/app/heler/book.ts where my books interface are defined

Step 3: Creating the Book Component
1. Generate a New Component for Displaying Books using the
// ng generate component book-display

2. Modify the Book Display Component, In book-display.component.ts, import the Book interface and use the @Input decorator to pass a book object to the component.

3. Style the Book Display (CSS): book-display.component.css
add styles to ensure all books are surrounded by a border and the price is displayed in green.
 src/app/book-display/book-display.component.css */

 4. Update the book Display Template: Modify book-display.component.html to display the book's properties, ensuring the price is prefixed by '$' and displayed in green.
 src/app/book-display/book-display.component.html 

 STEP 4
 Creating a Book List Component
 1. Generate a New Component for the Book List BY Running ng generate component book-list
 2. Implement the Book List Component:
    This component will manage a list of books and include a search feature.
        Import the Book interface and create a sample list of books.
            Implement a method to filter books based on a search query.
                Use ngFor to iterate over the filtered list of books and display each using the app-book-display component.


STEP 5: Implementing the Book List Component
1. Modify the Book List Component (TypeScript)
    In book-list.component.ts, set up a list of books and a search method.
     Import the Book interface.

2. Add a Search Input and Display Books in the Template
    implement a search input field in book-list.component.html
        se ngModel for two-way data binding on the search input (you might need to import FormsModule in app.module.ts).
            Use ngFor to iterate over filteredBooks and display each book using the app-book-display component.


STEP 6: Update AppComponent
   1. Ensure AppComponent is also marked as standalone and imports the BookListComponent

   2. Adjust AppComponent Template:
Use the BookListComponent in your app.component.html

FINAL
I decided to add the search box to my project
