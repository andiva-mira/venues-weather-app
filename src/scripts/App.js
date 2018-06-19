import {ForecastApiCall} from './modules/Forecast';
import {VenuesApiCall} from './modules/Venues';
import {CirclesAnimation} from './modules/CirclesAnimation';
import {ContentEvents} from './modules/Content';
import '../css/styles.scss';

const weatherCall = ForecastApiCall();
const venuesCall = VenuesApiCall();
const circlesAnim = CirclesAnimation();
const contentEvents = ContentEvents();
