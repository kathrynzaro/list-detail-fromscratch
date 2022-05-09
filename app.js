// import functions and grab DOM elements
import { stops } from './stop-detail.js';
import { renderStopLinks } from './utils.js';

const stopLinks = document.getElementById('roadtrip-photos');
// let state


for (let stop of stops) {
    const stopDiv = renderStopLinks(stop);
    stopLinks.append(stopDiv);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
