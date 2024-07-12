import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
            { path: 'pages', data: { breadcrumb: 'Pages' }, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
            { path: 'documentation', data: { breadcrumb: 'Documentation' }, loadChildren: () => import('./pages/documentation/documentation.module').then(m => m.DocumentationModule) },
        ]
    },
    { path: 'notfound', loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundModule) },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
