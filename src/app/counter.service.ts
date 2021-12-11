import { EventEmitter, Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CounterService {
  activeUserClickCount: number = 0;
  inactiveUserClickCount: number = 0;

  activeCountUpdate = new EventEmitter<number>();
  inactiveCountUpdate = new EventEmitter<number>();

  incrementActiveUserClickCount(): void {
    this.activeUserClickCount++;
    this.activeCountUpdate.emit(this.activeUserClickCount);
  }

  incrementInactiveUserClickCount(): void {
    this.inactiveUserClickCount++;
    this.inactiveCountUpdate.emit(this.inactiveUserClickCount);
  }
}
