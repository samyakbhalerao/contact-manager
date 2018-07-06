import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from "@angular/compiler/src/core";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModel } from "@angular/forms/src/directives/ng_model";


const appRoutes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
  ];
  
@NgModule({
    imports : [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports : [
        RouterModule
    ],
    providers : [
     //   CanDeactivateGuard
    ]
})
export class AppRoutingModule{

}

