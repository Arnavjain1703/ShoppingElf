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
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './services/order.service';
import { OrderItemComponent } from './orders/order-item/order-item.component';
import { AddressPannelComponent } from './address-pannel/address-pannel.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.direcive';
import { SellerProductComponent } from './seller/seller-product/seller-product.component';
import { SellerItemsComponent } from './seller/seller-product/seller-items/seller-items.component';
import { sellerService } from './services/sellerProduct.service';
import { SailItemComponent } from './seller/seller-product/sail-item/sail-item.component';
import { sailService } from './services/sails.service';
import { UplodeComponent } from './seller/uplode/uplode.component';
import { Category1Component } from './seller/uplode/category1/category1.component';
import { PhotoUplodeComponent } from './seller/uplode/photo-uplode/photo-uplode.component';
import { SizeComponent } from './seller/uplode/size/size.component';
import { Navbar2Component } from './seller/navbar2/navbar2.component';


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
    OrdersComponent,
    OrderItemComponent,
    AddressPannelComponent,
    SellerProductComponent,
    SellerItemsComponent,
    SailItemComponent,
    UplodeComponent,
    Category1Component,
    PhotoUplodeComponent,
    SizeComponent,
    Navbar2Component,
    // ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ParticlesModule,
    ReactiveFormsModule

    
  ],
  providers: [ServerService,ProductService,ProductBagService,ProductBagItemComponent,ProductBagComponent,AppComponent,sellerService,
    Category1Service,Category2Service,BrandsService,ProductItemComponent,ShowService,PriceService,SizeService,OtpComponent,OrderService,
  sailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
