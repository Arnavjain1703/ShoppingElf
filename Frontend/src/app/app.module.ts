import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import {FormsModule, ReactiveFormsModule} from '@angular/Forms';
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
import { SizeService } from './services/size.service';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FooterComponent } from './footer/footer.component';
import { SellerLoginComponent } from './seller/login/login.component';
import { SellerSignupComponent } from './seller/signup/signup.component';
import { OtpComponent } from './seller/otp/otp.component';
import { FillDetailsComponent } from './seller/fill-details/fill-details.component';
import { ConfirmValidatorDirective } from './shared/confirm-equal-validator.direcive';


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
    FrontpageComponent,
    FooterComponent,
    SellerLoginComponent,
    SellerSignupComponent,
    OtpComponent,
    FillDetailsComponent,
    // ConfirmValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ParticlesModule,
    ReactiveFormsModule

    
  ],
  providers: [ServerService,ProductService,ProductBagService,ProductBagItemComponent,ProductBagComponent,
    Category1Service,Category2Service,BrandsService,ProductItemComponent,ShowService,PriceService,SizeService,OtpComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
