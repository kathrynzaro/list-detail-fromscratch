// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderStopLinks } from '../utils.js';
import { stops } from '../stop-detail.js';

const test = QUnit.test;

test('test render stop function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="stop"><a href="./stop-detail/?id=1"><img src="../assets/chapel.jpg"></a></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderStopLinks(stops[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
