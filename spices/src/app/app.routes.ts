import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: ListProductComponent},
    { path: 'create-product', component: CreateProductComponent},
    { path: 'edit-product/:id', component: CreateProductComponent},
    { path: '**', redirectTo:'', pathMatch: 'full'}
];

NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};
