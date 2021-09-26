import { TreeComponent } from './components/tree/tree.component';
import { TableComponent } from './components/table/table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const routes: Routes = [
  {
    path: 'address-form',
    component: AddressFormComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'drag-drop',
    component: DragDropComponent,
  },
  {
    path: 'navigation',
    component: NavigationComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'tree',
    component: TreeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
