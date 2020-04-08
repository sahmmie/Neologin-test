import { Component, OnInit } from "@angular/core";
import neologin from "neologin";

@Component({
  selector: "app-neotest",
  templateUrl: "./neotest.component.html",
  styleUrls: ["./neotest.component.scss"],
})
export class NeotestComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    neologin.getAccount().then((account) => {
      console.log("Provider address: " + account.address);
    });
  }
}
