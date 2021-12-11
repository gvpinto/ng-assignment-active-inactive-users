import { Component, OnInit } from "@angular/core";
import { CounterService } from "./counter.service";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];
  activeUserClickCount: number = 0;
  inactiveUserClickCount: number = 0;

  constructor(
    private userService: UserService,
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    this.counterService.activeCountUpdate.subscribe(
      (count) => (this.activeUserClickCount = count)
    );
    this.counterService.inactiveCountUpdate.subscribe(
      (count) => (this.inactiveUserClickCount = count)
    );
    // this.activeUserClickCount = this.counterService.activeUserClickCount;
    // this.inactiveUserClickCount = this.counterService.inactiveUserClickCount;
  }
}
