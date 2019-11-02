import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/Forms';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ServerService } from './services/server.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductService } from './services/product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductBagComponent } from './product-bag/product-bag.component';
import { ProductBagService } from './services/product-bag.service';
import { ProductBagItemComponent } from './product-bag/product-bag-item/product-bag-item.component';
import { ProdictCostComponent } from './product-bag/prodict-cost/prodict-cost.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { Category1Service } from './services/category1.service';
import { Category2Service } from './services/category2.service';
import { ProductCategoryComponent } from './products/product-category/product-category.component';
import { ProductCategory2Component } from './products/product-category2/product-category2.component';
import { BrandsService } from './services/brands.service';
import { ShowService } from './services/show.service';
import { PriceService } from './services/priceService';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    LoginComponent,
    // HomePageComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ProductBagComponent,
    ProductBagItemComponent,
    ProdictCostComponent,
    MyOrderComponent,
    ProductCategoryComponent,
    ProductCategory2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,


    
  ],
  providers: [ServerService,ProductService,ProductBagService,
    Category1Service,Category2Service,BrandsService,ProductItemComponent,ShowService,PriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
