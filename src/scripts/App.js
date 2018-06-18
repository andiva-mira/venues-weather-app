// import Section from './modules/Section';
import {ForecastApiCall} from './modules/Forecast';
import {VenuesApiCall} from './modules/Venues';
import {CirclesAnimation} from './modules/CirclesAnimation';
import '../css/styles.scss';

//const section = Section();
const weatherCall = ForecastApiCall();
const venuesCall = VenuesApiCall();
const circlesAnim = CirclesAnimation();

