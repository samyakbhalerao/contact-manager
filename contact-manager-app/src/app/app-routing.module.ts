import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

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

