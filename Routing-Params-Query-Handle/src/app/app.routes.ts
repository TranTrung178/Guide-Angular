import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';

// Đảm bảo rằng routes được export
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user/:id', component: UserDetailComponent },
    { path: 'search', component: SearchComponent },
    { path: '**', component: NotFoundComponent }
];
