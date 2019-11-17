import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductBagComponent } from './product-bag/product-bag.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SellerLoginComponent } from './seller/login/login.component';
import { SellerSignupComponent } from './seller/signup/signup.component';
import { OtpComponent } from './seller/otp/otp.component';
import { FillDetailsComponent } from './seller/fill-details/fill-details.component';
import { OrdersComponent } from './orders/orders.component';
import { AddressPannelComponent } from './address-pannel/address-pannel.component';
import { SellerProductComponent } from './seller/seller-product/seller-product.component';
import { UplodeComponent } from './seller/uplode/uplode.component';
import { PhotoUplodeComponent } from './seller/uplode/photo-uplode/photo-uplode.component';
import { SizeComponent } from './seller/uplode/size/size.component';


  
const appRoutes: Routes=[
    {path:'',redirectTo: 'frontpage', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
     {path:'frontpage',component:FrontpageComponent},
    {path:'products',component:ProductsComponent},
     
    {path:'bag',component:ProductBagComponent},
     
    {path:'details/:id',component: ProductDetailsComponent},
    
    {path:'seller/login',component:SellerLoginComponent},
    {path:'seller/signup',component:SellerSignupComponent},
    {path:'seller/otp',component:OtpComponent},
    {path:'seller/details',component:FillDetailsComponent},
    {path:"orders",component:OrdersComponent},
    {path:"address/:id/add",component:AddressPannelComponent},
    {path:"address/add",component:AddressPannelComponent},
    {path:'sellerProduct',component:SellerProductComponent},
    {path:'addProduct',component:UplodeComponent},
    {path:'Upload/:id',component:PhotoUplodeComponent},
    {path:'size/:id',component:SizeComponent}

    



]
 

@NgModule(
    {
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
    }
    )
    
    export class AppRoutingModule
    {
    
    }
     