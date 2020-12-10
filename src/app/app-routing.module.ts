import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent } from './demo/todos/todos.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameListComponent } from './game-list/game-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent },

  // { path: 'games/:id/delete', component: GameDeleteComponent },
  // { path: 'games/:id/follow', component: GameFollowComponent },
  // { path: 'games/:id', component: GameDetailsComponent },
  // { path: 'games', component: GameListComponent },

  {
    path: 'games',
    children: [
      // { path: ':id/delete', component: GameDeleteComponent },
      // { path: ':id/follow', component: GameFollowComponent },
      { path: ':id', component: GameDetailsComponent },
      { path: '', component: GameListComponent },
    ]
  },
  { path: '',      redirectTo: 'games', pathMatch: 'full' },
  { path: '**',    component: NotFoundComponent }
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
