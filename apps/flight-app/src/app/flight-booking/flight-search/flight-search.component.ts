import {Component, OnInit} from '@angular/core';
import {FlightService, Flight} from '@flight-workspace/flight-api';
import { FlightBookingState } from '../+state/flight-booking.reducers';
import { Store } from '@ngrx/store';
import { flightLoaded } from '../+state/flight-booking.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  flights$: Observable<Flight[]>;

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: object = {
    "3": true,
    "5": true
  };

  constructor(
    private store: Store<FlightBookingState>,
    private flightService: FlightService) {
  }

  ngOnInit() {
    this.flights$ = this.store.select(state => state.flightBooking.flights);
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.flightService
      //.load(this.from, this.to, this.urgent);
      .find(this.from, this.to, this.urgent)
      .subscribe(flights => {
        this.store.dispatch(flightLoaded({flights}));
      })
  }

  delay(): void {
    this.flightService.delay();
  }

}
