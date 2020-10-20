import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardUsersComponent } from './components/dashboard-users/dashboard-users.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';

const rutas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      /* {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'users'
      }, */
      {
        path: 'users',
        component: DashboardUsersComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DashboardComponent,
    HeaderComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rutas,
      {
        //Parametros Basicos
        //Sirve para ver comportamiento por el Console
        enableTracing: true,
        //Para que el Hijo Herede del Padre
        paramsInheritanceStrategy: "always",
        //Hace que entienda la URL como Ruta y NO como Carpeta
        useHash: true
      }
      ),
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
