import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlDemoComponent, AlertDemoComponent, ButtonDemoComponent, TextboxDemoComponent, SelectDemoComponent  } from './control-demo'
import { componentFactoryName } from '@angular/compiler';


const routes: Routes = [
  {
    path:'control-demo',
    component:ControlDemoComponent,
    children:[
      {
       path:'alert',
       component:AlertDemoComponent
      },
      {
        path:'button',
        component:ButtonDemoComponent
       },
       {
        path:'textbox',
        component:TextboxDemoComponent
       },
       {
        path:'select',
        component:SelectDemoComponent
       },
      {
       path:'',
       redirectTo:"alert",
       pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


  
}
