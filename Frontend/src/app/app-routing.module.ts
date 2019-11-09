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


  
const appRoutes: Routes=[
    {path:'',redirectTo: 'frontpage', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
     {path:'frontpage',component:FrontpageComponent},
    {path:'products',component:ProductsComponent},
     
    {path:'bag',component:ProductBagComponent},
     
    {path:'details/:id',component: ProductDetailsComponent},
    {path:'orders',component: MyOrderComponent},
    {path:'seller/login',component:SellerLoginComponent},
    {path:'seller/signup',component:SellerSignupComponent}
    



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
     