import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CardListComponent } from './portfolio/card-list/card-list.component';
import { AlertListComponent } from './portfolio/alert-list/alert-list.component';
import { CarouselListComponent } from './portfolio/carousel-list/carousel-list.component';
import { CollapseListComponent } from './portfolio/collapse-list/collapse-list.component';
import { DropdownListComponent } from './portfolio/dropdown-list/dropdown-list.component';
import { ModalListComponent } from './portfolio/modal-list/modal-list.component';
import { NavbarListComponent } from './portfolio/navbar-list/navbar-list.component';
import { PaginationListComponent } from './portfolio/pagination-list/pagination-list.component';
import { PlaceholderListComponent } from './portfolio/placeholder-list/placeholder-list.component';
import { PopoverListComponent } from './portfolio/popover-list/popover-list.component';
import { ProgressListComponent } from './portfolio/progress-list/progress-list.component';
import { SpinnerListComponent } from './portfolio/spinner-list/spinner-list.component';
import { ToastListComponent } from './portfolio/toast-list/toast-list.component';
import { TooltipListComponent } from './portfolio/tooltip-list/tooltip-list.component';
import { AccordionListComponent } from './portfolio/accordion-list/accordion-list.component';
import { BadgeListComponent } from './portfolio/badge-list/badge-list.component';
import { BreadcrumbListComponent } from './portfolio/breadcrumb-list/breadcrumb-list.component';
import { ButtonListComponent } from './portfolio/button-list/button-list.component';
import { ButtonGroupListComponent } from './portfolio/button-group-list/button-group-list.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'accordion', component: AccordionListComponent },
    { path: 'alert', component: AlertListComponent },
    { path: 'badge', component: BadgeListComponent },
    { path: 'breadcrumb', component: BreadcrumbListComponent },
    { path: 'button', component: ButtonListComponent },
    { path: 'button-group', component: ButtonGroupListComponent },
    { path: 'card', component: CardListComponent },
    { path: 'carousel', component: CarouselListComponent },
    { path: 'collapse', component: CollapseListComponent },
    { path: 'dropdown', component: DropdownListComponent },
    { path: 'modal', component: ModalListComponent },
    { path: 'navbar', component: NavbarListComponent },
    { path: 'pagination', component: PaginationListComponent },
    { path: 'placeholder', component: PlaceholderListComponent },
    { path: 'popover', component: PopoverListComponent },
    { path: 'progress', component: ProgressListComponent },
    { path: 'spinner', component: SpinnerListComponent },
    { path: 'toast', component: ToastListComponent },
    { path: 'tooltip', component: TooltipListComponent },
    {
        path: 'portfolio',
        component: PortfolioComponent,
        // children: [
        //     { path: 'accordion', component: AccordionComponent }
        // ]
    },

    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
