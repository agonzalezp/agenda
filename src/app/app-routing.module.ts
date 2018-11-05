import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTableComponent } from './my-table/my-table.component';
import { MyDashComponent } from './my-dash/my-dash.component';
import { MyDragDropComponent } from './my-drag-drop/my-drag-drop.component';
import { MyTreeComponent } from './my-tree/my-tree.component';
import { FrmPersonNewComponent } from './frm-person-new/frm-person-new.component';

const routes: Routes = [
  {path: '', component: MyDashComponent },
  {path: 'Lista-Persona', component: MyTableComponent  },
  {path: 'Tablero', component: MyDragDropComponent  },
  {path: 'Arbol', component: MyTreeComponent  },
  {path: 'Nuevo', component: FrmPersonNewComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
