import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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
  private destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    const rnd = Math.random();
    const interval = setInterval(() => {
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
