import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host: {
    class: 'status',
  },
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  public currentStatus: 'online' | 'unknown' | 'offline' = 'offline';
  private interval?: ReturnType<typeof setInterval>;

  constructor() {}

  ngOnInit() {
    const rnd = Math.random();
    this.interval = setInterval(() => {
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
