import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterLoginComponent } from './register-login.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {
        path: '', component: RegisterLoginComponent, children: [
            { path: 'dang-ky', component: RegisterComponent },
            { path: 'dang-nhap', component: LoginComponent }
        ]
    }



];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterLoginRoutingModule { }
