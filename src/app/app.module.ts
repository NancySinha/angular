import { browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import{ ReactiveFormsModule}from '@angular/forms';
import{ BrowserAnimationsModule}from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { GrandParentComponent } from './family/grand-parent/grand-parent.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';
import { StringSortPipePipe } from './myPipes/string-sort-pipe.pipe';
import { NumberSortPipePipe } from './myPipes/number-sort-pipe.pipe';
import { ConsumeLocalService1Component } from './consumeService/consume-local-service1/consume-local-service1.component';
import { UserApicomponentComponent } from './remote/user-apicomponent/user-apicomponent.component';
import { AutoSearchPipe } from './myPipes/auto-search.pipe';
import { UserDetailComponent } from './remote/user-detail/user-detail.component';
import { TempleleteComponent } from './form/templelete/templelete.component';
import { ModelFormComponent } from './form/model-form/model-form.component';
import { AnimationComponent } from './animation/animation.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductsComponent } from './products/products.component'




@NgModule({
  declarations: [
    AppComponent,
    GrandParentComponent,
    FatherComponent,
    MotherComponent,
    TaskManagerComponent,
    StringSortPipePipe,
    NumberSortPipePipe,
    ConsumeLocalService1Component,
    UserApicomponentComponent,
    AutoSearchPipe,
    UserDetailComponent,
    TempleleteComponent,
    ModelFormComponent,
    AnimationComponent,
    LandingpageComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
      },
      {
        path: 'remote',
        component: UserApicomponentComponent
      },
      {
        path:'remoteData/myid',
        component:UserDetailComponent
      },
       {
        path:'Tempelate',
        component:TempleleteComponent
      },
      {
        path:'ModelForm',
        component:ModelFormComponent
      },
      {
        path: 'Animate',
        component: AnimationComponent
      },
      {
        path: 'Landingpage',
        component: LandingpageComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
