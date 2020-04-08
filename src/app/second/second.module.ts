import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NeotestComponent } from "./neotest/neotest.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: NeotestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [NeotestComponent],
  providers: [],
})
export class SecondModule {}
