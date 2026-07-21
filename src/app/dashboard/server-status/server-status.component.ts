import { Component, OnInit } from '@angular/core';

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
export class ServerStatusComponent implements OnInit {
  public currentStatus: 'online' | 'unknown' | 'offline' = 'offline';

  constructor() {}

  ngOnInit() {
    const rnd = Math.random();
    setInterval(() => {
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
