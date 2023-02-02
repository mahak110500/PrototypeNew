import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ForgetPasswordComponent } from './pages/auth/forget-password/forget-password.component';
import { WorkspaceComponent } from './pages/home-page/workspace/workspace.component';
import { NewProjectComponent } from './pages/home-page/new-project/new-project.component';
import { ManageProjectComponent } from './pages/home-page/manage-project/manage-project.component';
import { AdminComponent } from './pages/home-page/admin/admin.component';
import { ConfigureComponent } from './pages/home-page/configure/configure.component';
import { ExtractComponent } from './pages/home-page/extract/extract.component';
import { SidebarComponent } from './pages/home-page/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthComponent,
    ForgetPasswordComponent,
    WorkspaceComponent,
    NewProjectComponent,
    ManageProjectComponent,
    AdminComponent,
    ConfigureComponent,
    ExtractComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
