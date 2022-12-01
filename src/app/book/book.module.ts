import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookComponent } from './book/book.component';
import { BookRoutingModule } from './book.routes';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsComponent,
    BookCardComponent,
    BookComponent,
    
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatCardModule,
    MatButtonModule
    

    
  ]
})
export class BookModule { }
