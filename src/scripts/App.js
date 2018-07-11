import {ForecastApiCall} from './modules/ForecastCall';
import {VenuesApiCall} from './modules/VenuesCall';
import {CirclesAnimation} from './modules/CirclesAnimation';
import ContentExpand from './modules/ContentExpand';
import SvgLoad from'./modules/SvgLoad';
import '../css/styles.scss';
import londonEye from '../images/london-eye.svg';
import eiffelTower from '../images/eiffel-tower.svg';
import windmill from '../images/windmill.svg';
import japan from '../images/japan.svg';
import cloudPair from '../images/icons/cloud-pair.svg';
import cloud from '../images/icons/cloud.svg';
import airBalloon from '../images/icons/air-balloon.svg';
import arrow from '../images/icons/arrow.svg';


const weatherCall = ForecastApiCall();
const venuesCall = VenuesApiCall(); 
const circlesAnim = CirclesAnimation();
new ContentExpand();

const svgAttr = [londonEye, eiffelTower, windmill, japan ];
new SvgLoad("#canvas", svgAttr);

const svgRight = [cloudPair, cloud, airBalloon];
new SvgLoad("#contentRightCanvas", svgRight );

const svgLeft = [cloudPair, cloud, airBalloon];
new SvgLoad("#contentLeftCanvas", svgLeft );

const svgBtn = [arrow];
new SvgLoad("#btnCanvas", svgBtn);
