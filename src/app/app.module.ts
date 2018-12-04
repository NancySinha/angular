import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




import { AppComponent } from './app.component';
import { GrandParentComponent } from './family/grand-parent/grand-parent.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';
import { StringSortPipePipe } from './myPipes/string-sort-pipe.pipe';
import { NumberSortPipePipe } from './myPipes/number-sort-pipe.pipe';
import { ConsumeLocalService1Component } from './consumeService/consume-local-service1/consume-local-service1.component';


@NgModule({
  declarations: [
    AppComponent,
    GrandParentComponent,
    FatherComponent,
    MotherComponent,
    TaskManagerComponent,
    StringSortPipePipe,
    NumberSortPipePipe,
    ConsumeLocalService1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
       {
        path: 'family',
        component: GrandParentComponent,
      children: [
      {
        path: 'father',
        component:FatherComponent
      },
      {
        path: 'mother',
        component: MotherComponent
      }
    ]
  }, 
  {
path:'LocalService',
component:ConsumeLocalService1Component  },
        {
        path: 'task',
        component: TaskManagerComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
