import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard } from '../../core/auth/auth.guard';

export const AuthRoutes: Routes = [{
  path: 'login', component: LoginComponent, canActivate: [AuthGuard]
}, {
  path: 'register', component: RegisterComponent, canActivate: [AuthGuard]
}, {
  path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
}];