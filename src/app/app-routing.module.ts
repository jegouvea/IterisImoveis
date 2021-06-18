import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ImoveisPageComponent } from './components/imoveis-page/imoveis-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';

const routes: Routes = [
  {
    path:'', /* rota principal - pagina padrao */
    /* o que renderiza primeiro, é o menu, depois eu falo o que tem dentro do menu */
    component: MenuTemplateComponent, /* seu componente é o MenuTemplateComponent */
    children: [ /* dentro dele vai ter - caminho
      o menu renderiza as 3 paginas de acordo com a pagina acessada*/
      {
        path:'',
        component: HomePageComponent,
      },

      {
        path:'sobre',
        component: SobrePageComponent,
      },

      {
        path:'imoveis',
        component: ImoveisPageComponent,
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
