import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';

import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: WelcomeComponent
  // },
  // {
  //   path: 'feature',
  //   loadChildren: './feature/feature.module#FeatureModule',
  // },
  // {
  // path : '**',
  // redirectTo: '/'
  // }

  {
    path: '',
    component: AppComponent,
    children: [

      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'main',
        component: MainComponent
      },
      {
      path : '',
      pathMatch: 'full',
      redirectTo: '/login'
      },
      {
      path : '**',
      redirectTo: '/'
      }
    ]
  },
  {
  path : '**',
  redirectTo: '/'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

