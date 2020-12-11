import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './components/main/main.component';
import { TablasComponent } from './components/views/tablas/tablas.component';
import { AuthGuard } from './utils/guards/auth.guard';



const routes: Routes = [
 { path: '', component: AppComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent},
      { path: 'admin', component: AdminComponent},
      { path: 'main', component: MainComponent,
        children: [
          { path: 'tablas',component: TablasComponent}
        ]
      }
    ]
  },
  { path: '**', component: LoginComponent },

  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

