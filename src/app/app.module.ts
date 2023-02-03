import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { WorkspaceComponent } from './components/home-page/workspace/workspace.component';
import { NewProjectComponent } from './components/home-page/new-project/new-project.component';
import { ManageProjectComponent } from './components/home-page/manage-project/manage-project.component';
import { AdminComponent } from './components/home-page/admin/admin.component';
import { ConfigureComponent } from './components/home-page/configure/configure.component';
import { ExtractComponent } from './components/home-page/extract/extract.component';
import { SidebarComponent } from './components/home-page/sidebar/sidebar.component';
import { ComponentsComponent } from './components/components.component';
import { UserManagementComponent } from './components/home-page/admin/user-management/user-management.component';
import { InstanceManagementComponent } from './components/home-page/admin/instance-management/instance-management.component';
import { BillingComponent } from './components/home-page/admin/billing/billing.component';
import { CapacityComponent } from './components/home-page/admin/capacity/capacity.component';
import {NgxPaginationModule} from 'ngx-pagination';



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
    ComponentsComponent,
    UserManagementComponent,
    InstanceManagementComponent,
    BillingComponent,
    CapacityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
