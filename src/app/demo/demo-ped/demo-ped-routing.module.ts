import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { DemoPedComponent } from './demo-ped.component';

const routes: Routes = [
  { path: 'demoped', component: DemoPedComponent, data: { title: extract('Pattern Validations') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DemoPedRoutingModule {}
