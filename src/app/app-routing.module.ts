import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './pages/auth/auth-guard.guard';
import { AuthComponent } from './pages/auth/auth.component';
import { ForgetPasswordComponent } from './pages/auth/forget-password/forget-password.component';
import { AdminComponent } from './pages/home-page/admin/admin.component';
import { ConfigureComponent } from './pages/home-page/configure/configure.component';
import { ExtractComponent } from './pages/home-page/extract/extract.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ManageProjectComponent } from './pages/home-page/manage-project/manage-project.component';
import { NewProjectComponent } from './pages/home-page/new-project/new-project.component';
import { WorkspaceComponent } from './pages/home-page/workspace/workspace.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
	{
		path: 'auth',
		component: AuthComponent,
		canActivate:  [AuthGuardGuard],
	},
  {
    path: 'home-page',
    component: HomePageComponent,

  },
  {
		path: 'forget-password',
		component: ForgetPasswordComponent,

	},
  {
		path: 'home-page',
		component: HomePageComponent,
		canActivate:  [AuthGuardGuard],
		children: [
			{
				path: 'workspace',
				component: WorkspaceComponent


			},
			{
				path: 'manage-project',
				component: ManageProjectComponent



			},
			{
				path: 'new-project',
				component: NewProjectComponent


			},
			{
				path: 'extract',
				component: ExtractComponent


			},
			{
				path: 'configure',
				component: ConfigureComponent


			},
			{
				path: 'admin',
				component: AdminComponent,
			},

		]

	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
