import { Flight } from '@flight-workspace/flight-api';
import { createReducer, on } from '@ngrx/store';
import { flightLoaded } from './flight-booking.actions';

export const flightBookingFeatureKey = "flightBooking";

export interface State {
    flights: Flight[];
}

export interface FlightBookingState {
    flightBooking: State;
}

export const initalState: State = {
    flights: []
}

export const flightBookingReducer = createReducer(
    initalState,
    on(flightLoaded, (state, action) => {
        const flights = action.flights;
        return {...state, flights};
    })
)