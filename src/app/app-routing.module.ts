import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './components/auth/auth-guard.guard';
import { AuthComponent } from './components/auth/auth.component';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { LoggedinAuthGuard } from './components/auth/loggedin-auth.guard';
import { AdminComponent } from './components/home-page/admin/admin.component';
import { ConfigureComponent } from './components/home-page/configure/configure.component';
import { ExtractComponent } from './components/home-page/extract/extract.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ManageProjectComponent } from './components/home-page/manage-project/manage-project.component';
import { NewProjectComponent } from './components/home-page/new-project/new-project.component';
import { WorkspaceComponent } from './components/home-page/workspace/workspace.component';


const routes: Routes = [
	{ path: '', redirectTo: '/home-page', pathMatch: 'full' },
	{
		path: 'auth',
		component: AuthComponent,
		canActivate: [LoggedinAuthGuard],
	},
	{
		path: 'forget-password',
		component: ForgetPasswordComponent,

	},
	{
		path: 'home-page',
		component: HomePageComponent,
		canActivate: [AuthGuardGuard],
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
