import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Book, BookCategory } from 'src/app/model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  //books=[1,2,3,4,5,6,7,8,9,10];
  bookCategories: BookCategory []= [
  //   {title:'',
  //   categoryId:''
  // }
  ];



  // books: Book[] =[ 

  // {title : 'Harry Potter',
  // description:`Attempts to destroy the locket fail. 
  // Hermione deduces that Gryffindor's sword can destroy 
  // Horcruxes because it is impregnated with basilisk venom. 
  // Ron, affected by the dark locket.`,
  // author:'J.K. Rowling',
  // price: 100,
  // buyLink:'https://www.amazon.in/Harry-Potter-ChildrenS-Paperback-Boxed/dp/1408856778/ref=asc_df_1408856778/?tag=googleshopdes-21&linkCode=df0&hvadid=397082432147&hvpos=&hvnetw=g&hvrand=7384725956577833371&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9303726&hvtargid=pla-318206913780&psc=1&ext_vrnc=hi',
  // imageUrl:'https://upload.wikimedia.org/wikipedia/en/2/2d/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg',
  // },
  // {title : 'Harry Potter 2',
  // description:`Attempts to destroy the locket fail. 
  // Hermione deduces that Gryffindor's sword can destroy 
  // Horcruxes because it is impregnated with basilisk venom. 
  // Ron, affected by the dark locket.`,
  // author:'J.K. Rowling',
  // price: 100,
  // buyLink:'https://www.amazon.in/Harry-Potter-ChildrenS-Paperback-Boxed/dp/1408856778/ref=asc_df_1408856778/?tag=googleshopdes-21&linkCode=df0&hvadid=397082432147&hvpos=&hvnetw=g&hvrand=7384725956577833371&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9303726&hvtargid=pla-318206913780&psc=1&ext_vrnc=hi',
  // imageUrl:'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_.jpg',
  // },
  // {title : 'Harry Potter 3',
  // description:`Attempts to destroy the locket fail. 
  // Hermione deduces that Gryffindor's sword can destroy 
  // Horcruxes because it is impregnated with basilisk venom. 
  // Ron, affected by the dark locket.`,
  // author:'J.K. Rowling',
  // price: 100,
  // buyLink:'https://www.amazon.in/Harry-Potter-ChildrenS-Paperback-Boxed/dp/1408856778/ref=asc_df_1408856778/?tag=googleshopdes-21&linkCode=df0&hvadid=397082432147&hvpos=&hvnetw=g&hvrand=7384725956577833371&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9303726&hvtargid=pla-318206913780&psc=1&ext_vrnc=hi',
  // imageUrl:'https://upload.wikimedia.org/wikipedia/en/2/2d/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg',
  // },
  // {title : 'Harry Potter 4',
  // description:`Attempts to destroy the locket fail. 
  // Hermione deduces that Gryffindor's sword can destroy 
  // Horcruxes because it is impregnated with basilisk venom. 
  // Ron, affected by the dark locket.`,
  // author:'J.K. Rowling',
  // price: 100,
  // buyLink:'https://www.amazon.in/Harry-Potter-ChildrenS-Paperback-Boxed/dp/1408856778/ref=asc_df_1408856778/?tag=googleshopdes-21&linkCode=df0&hvadid=397082432147&hvpos=&hvnetw=g&hvrand=7384725956577833371&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9303726&hvtargid=pla-318206913780&psc=1&ext_vrnc=hi',
  // imageUrl:'https://upload.wikimedia.org/wikipedia/en/2/2d/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg',
  // }
  // ];


  books :Book[]=[];

  selectedBookCategory: any;


  constructor( private bookService:BookService, private router:Router, private activatedRoute :ActivatedRoute){

  }





  ngOnInit(): void {

    this.fetchBookCategories();
    
  }

  fetchBookCategories(){

    this.bookService.getBookCategories().pipe(
      map((response)=>{
        console.log('response',response)
       
          return this.transformedCategories(response);
        
        
        })
        )
    .subscribe({
      next:(categories :BookCategory[])=>{
        console.log('transformed',categories);
        this.bookCategories=categories;
        this.onCategorySelected(this.bookCategories[0])

      },
      error:(error)=>{
        console.log(error);

      }
    })
  }
  transformedCategories(categoryResponse : any ) : BookCategory[]{
    
    const transformedCategories= categoryResponse.results.map((
      category :any)=>{

        const newCategory:BookCategory={

      title:category.list_name,
      categoryId:category.list_name_encoded
       };
        return newCategory;




    });

    return transformedCategories;


    

  }


  onCategorySelected(category:BookCategory){
    this.selectedBookCategory=category;
    
    this.fetchBooksByCategory();
  }


  fetchBooksByCategory(){
    this.bookService.
    getBooksByCategories(this.selectedBookCategory.categoryId)
    .pipe(
      map((response)=>{
        return this.getTransformedBooks(response);
      })
    )
    .subscribe({
      next:(books :Book[])=>{
        console.log(books);
        this.books=books;
      },
      error:(error)=>{
        console.log(error);

      },

    });


  }

  getTransformedBooks(booksResponse:any):Book[]{
    return booksResponse.results.books.map((book:any)=>{
      const newBook:Book={
        title : book.title,
        description:book.description,
        author: book.author,
        price:Number(book.price) ,
        buyLink:book.amazon_product_url,
        imageUrl: book.book_image,

      };
      return newBook;

    })
  }

  goToBookDetailView(book :Book){
    
    localStorage.setItem('selectedBook',JSON.stringify(book))
    this.router.navigate(['../detail'],{relativeTo:this.activatedRoute})
  }




  
 
  

}
