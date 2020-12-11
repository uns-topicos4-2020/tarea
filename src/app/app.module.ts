import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './components/main/header/header.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { UserDropdownMenuComponent } from './components/main/header/user-dropdown-menu/user-dropdown-menu.component';

import { AuthService } from './services/auth.service';
import { GuardGuard } from './services/guard.guard';
import { TablasComponent } from './components/views/tablas/tablas.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AdminComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    UserDropdownMenuComponent,
    TablasComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    ServiceWorkerModule.register('/../ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AuthService,
    GuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
