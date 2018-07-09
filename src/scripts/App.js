import {ForecastApiCall} from './modules/ForecastCall';
import {VenuesApiCall} from './modules/VenuesCall';
import {CirclesAnimation} from './modules/CirclesAnimation';
import ContentExpand from './modules/ContentExpand';
import SvgLoad from'./modules/SvgLoad';
import '../css/styles.scss';

const weatherCall = ForecastApiCall();
const venuesCall = VenuesApiCall(); 
const circlesAnim = CirclesAnimation();
new ContentExpand();


const win = window.innerWidth;

if (win < 550 ) {
	const svgAttr = ["../images/london-eye.svg", "../images/eiffel-tower.svg", "../images/windmill.svg"];
	new SvgLoad("#canvas", svgAttr);
}  else {
	const svgAttr = ["../images/london-eye.svg", "../images/eiffel-tower.svg", "../images/windmill.svg", "../images/japan.svg" ];
	new SvgLoad("#canvas", svgAttr);
}


const svgRight = ["../images/icons/cloud-pair.svg", "../images/icons/cloud.svg", "../images/icons/air-balloon.svg"];
new SvgLoad("#contentRightCanvas", svgRight );

const svgLeft = ["../images/icons/cloud-pair.svg", "../images/icons/cloud.svg", "../images/icons/air-balloon.svg"];
new SvgLoad("#contentLeftCanvas", svgLeft );

const svgBtn = ["../images/icons/arrow.svg"];
new SvgLoad("#btnCanvas", svgBtn);