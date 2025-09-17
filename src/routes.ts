import { Routes } from "@angular/router";
import { Home } from "./app/home/home.component";
import { DetailComponent } from "./app/detail/detail.component";

const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailComponent,
    title: 'Home details',
  },
];
export default routeConfig;
