import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "dashboard", loadChildren: "~/app/dashboard/dashboard.module#DashboardModule" },
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot(
            routes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
