import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCreateComponent } from './demo/todos/todo-create/todo-create.component';

import { TodosComponent } from './demo/todos/todos.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameFormComponent } from './game-form/game-form.component';
import { GameListComponent } from './game-list/game-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'todos',
    children: [
      { path: 'new', component: TodoCreateComponent },
      { path: '', component: TodosComponent, pathMatch: 'full' }
    ]
  },

  {
    path: 'product',
    children: [
      { path: 'new', component: GameFormComponent},
      {
        path: ':id',
        children: [
          { path: 'edit',  component: GameFormComponent},
          { path: '',      component: GameDetailsComponent, pathMatch: 'full' },
        ]
      },
      { path: '', component: GameListComponent },
    ]
  },

  { path: '',   redirectTo: 'product', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
