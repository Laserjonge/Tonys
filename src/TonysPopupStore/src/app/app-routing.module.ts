import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteNames } from './common/helpers/route-names';

import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { OpeninghoursComponent } from './openinghours/openinghours.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ContactComponent } from './contact/contact.component';
import { ExtraComponent } from './extra/extra.component';

const routes: Routes = [
    { path: '', redirectTo: '/' + RouteNames.home, pathMatch: 'full' },
    { path: RouteNames.home, component: HomeComponent },
    { path: RouteNames.info, component: InfoComponent },
    { path: RouteNames.openingHours, component: OpeninghoursComponent },
    { path: RouteNames.agenda, component: AgendaComponent },
    { path: RouteNames.contact, component: ContactComponent },
    { path: RouteNames.extra, component: ExtraComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
