import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListProductComponent} from './components/list-product/list-product.component'

@NgModule({
  declarations: [
    
  ],
  imports: [
    AppComponent,
    HeaderComponent,
    BrowserModule,
    CreateProductComponent,
    ListProductComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }