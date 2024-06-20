import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RolComponent } from './modules/rol/rol.component';
import { UserComponent } from './modules/user/user.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { CountryComponent } from './modules/country/country.component';
import { AuthorComponent } from './modules/author/author.component';
import { BookComponent } from './modules/book/book.component';
import { LoanComponent } from './modules/loan/loan.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'loan', component: LoanComponent },
      { path: 'roles', component: RolComponent },
      { path: 'users', component: UserComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'country', component: CountryComponent },
      { path: 'author', component: AuthorComponent },
      { path: 'book', component: BookComponent },
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
