import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

//COMPONENTES
import { LoginComponent } from 'componentes/login/login.component';
import { CadastroComponent } from 'componentes/cadastro/cadastro.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent}
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// SOLUÇÃO DO MÓDULO DECAPRECIADO (ModuleWithProviders)
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}