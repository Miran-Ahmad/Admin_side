import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateProductsComponent } from './pages/dashboard/create-products/create-products.component';
import { EditProductsComponent } from './pages/dashboard/edit-products/edit-products.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'create-products',
    component: CreateProductsComponent,
  },
  {
    path: 'edit-products/:id',
    component: EditProductsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
