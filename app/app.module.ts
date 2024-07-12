import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { ApiServices } from "./services/api-services";
import { HelperServices } from "./services/helper-services";
import { environment } from "../environments/environment";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        {provide: 'API_URL', useValue: environment.apiUrl},  // Provider for the API Env Vars
        ApiServices, // connector for APIs
        HelperServices
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
