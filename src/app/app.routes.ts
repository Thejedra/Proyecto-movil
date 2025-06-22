import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'iniciosesion',
    loadComponent: () =>
      import('./iniciosesion/iniciosesion.component').then(m => m.IniciosesionComponent)
  },
  {
    path: 'mesas',
    loadComponent: () =>
      import('./mesas/mesas.component').then(m => m.MesasComponent)
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./menu/menu.component').then(m => m.MenuComponent)
  },
  {
    path: 'pedidos',
    loadComponent: () =>
      import('./pedidos/pedidos.component').then(m => m.PedidosComponent)
  },
  {
    path: 'mesero',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./mesero-mesas/mesero-mesas.component').then(m => m.MeseroMesasComponent)
      },
      {
        path: 'pedido/:mesa',
        loadComponent: () =>
          import('./mesero-pedido/mesero-pedido.component').then(m => m.MeseroPedidoComponent)
      }
    ]
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin/admin.component').then(m => m.AdminComponent),
    children: [
      {
        path: 'mesas',
        loadComponent: () =>
          import('./admin/crud-mesas/crud-mesas.component').then(m => m.CrudMesasComponent)
      },
      {
        path: 'meseros',
        loadComponent: () =>
          import('./admin/crud-meseros/crud-meseros.component').then(m => m.CrudMeserosComponent)
      },
      {
        path: 'menu',
        loadComponent: () =>
          import('./admin/crud-menu/crud-menu.component').then(m => m.CrudMenuComponent)
      },
      {
        path: '',
        redirectTo: 'mesas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'iniciosesion',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'iniciosesion'
  }
];


