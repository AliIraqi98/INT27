import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from "primeng/skeleton";
import { SkeletonInfoBoxSingleComponent } from './skeleton-info-box-single/skeleton-info-box-single.component';

@NgModule({
    declarations: [
        SkeletonInfoBoxSingleComponent
    ],
    exports: [
        SkeletonInfoBoxSingleComponent
    ],
    imports: [
        CommonModule,
        SkeletonModule
    ]
})
export class DisplayHelpersModule {
}
