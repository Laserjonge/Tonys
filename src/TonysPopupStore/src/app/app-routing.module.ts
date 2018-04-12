import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { OpeninghoursComponent } from './openinghours/openinghours.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ContactComponent } from './contact/contact.component';
import { ExtraComponent } from './extra/extra.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'info', component: InfoComponent },
    { path: 'openinghours', component: OpeninghoursComponent },
    { path: 'agenda', component: AgendaComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'extra', component: ExtraComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
