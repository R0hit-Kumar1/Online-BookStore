import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookModule } from './book/book.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'books',
  },
  {
    path:'books',
    loadChildren:()=>BookModule,
  },
  {path:"**",
  component:PageNotFoundComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
