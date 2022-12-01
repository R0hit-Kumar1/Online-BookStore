import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit{
  book:any;

  constructor(){

  }
  ngOnInit(): void {
    this.book=JSON.parse(localStorage.getItem('selectedBook')!)
    console.log(this.book);
    
  }
  goToBuyLink(){
    window.open(this.book.buyLink)
  }

}
