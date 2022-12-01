import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookComponent } from "./book/book.component";



const routes: Route[] =[

    {
        path:'',
        
        component: BookComponent,
        children:[
            {
            path:'',
            pathMatch:'full',
            redirectTo:'list',

        },
        {
            path:'list',
            component:BookListComponent,
        },
        {
            path:'detail',
            component:BookDetailsComponent,
        }
    
    ]
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BookRoutingModule { }
  


