import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
  },
  {
    path: "neo",
    data: {
      title: "neo",
    },
    loadChildren: () =>
      import("./second/second.module").then((mod) => mod.SecondModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
