import { createAction, props } from '@ngrx/store';
import { Flight } from '@flight-workspace/flight-api';

export const flightLoaded = createAction(
    "[FlightBooking] Flights loaded",
    props<{flights: Flight[]}>()
)