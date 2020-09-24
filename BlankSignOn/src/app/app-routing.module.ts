import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { SignInTemplateComponent } from './sign-in-template/sign-in-template.component';


const routes: Routes = [
  {path: 'signin', component: SignInComponent},
  {path: 'signintemplate', component: SignInTemplateComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'signin', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
