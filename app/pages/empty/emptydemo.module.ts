import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDemoRoutingModule } from './emptydemo-routing.module';
import { EmptyDemoComponent } from './emptydemo.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";

@NgModule({
    imports: [
        CommonModule,
        EmptyDemoRoutingModule,
        CardModule,
        ButtonModule
    ],
    declarations: [EmptyDemoComponent]
})
export class EmptyDemoModule { }
