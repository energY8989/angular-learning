import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { UsersComponent } from './components/users/users.component';
import { RoleComponent } from './components/role/role.component';

import { DataService } from './services/data.service';
import { ArrayComponent } from './components/array/array.component';
import { BindingComponent } from './components/binding/binding.component';
import { CssclassComponent } from './components/cssclass/cssclass.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { EventsComponent } from './components/events/events.component';
import { ModelbindingComponent } from './components/modelbinding/modelbinding.component';
import { ModelvalidationComponent } from './components/modelvalidation/modelvalidation.component';
import { UserService } from './services/user.service';
import { HttpService } from './services/http.service';
import { HttpComponent } from './components/http/http.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        UsersComponent,
        RoleComponent,
        ArrayComponent,
        BindingComponent,
        CssclassComponent,
        PipesComponent,
        EventsComponent,
        ModelbindingComponent,
        ModelvalidationComponent,
        HttpComponent,
        UserDetailsComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'users', component: UsersComponent },
            { path: 'array', component: ArrayComponent },
            { path: 'binding', component: BindingComponent },
            { path: 'cssclass', component: CssclassComponent },
            { path: 'pipes', component: PipesComponent },
            { path: 'events', component: EventsComponent },
            { path: 'modelbinding', component: ModelbindingComponent },
            { path: 'modelvalidation', component: ModelvalidationComponent },
            { path: 'http', component: HttpComponent },
            { path: 'user/:id', component: UserDetailsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        DataService,
        UserService,
        HttpService
    ]
})
export class AppModuleShared {
}
