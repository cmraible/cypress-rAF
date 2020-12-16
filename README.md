# cypress-rAF

1. Clone this repo
2. `npm install`
3. `npm run start` to run the dev server
4. `npx cypress open` to open the cypress test runner
5. run tests
6. open js console to see any adjacent animationFrames with elapsed time > 17 ms, grouped by most recent window.blur and window.focus events


# src/App.js
Super simple app with a single button that displays a modal on click. The modal in turn displays a message ("Hello") that is animated in with duration of 1 second.

# cypress/integration/test_spec.js
Visits localhost:3000, clicks on the "Open Modal" button and asserts that "Hello" is visible. Repeats the same test 100 times.

Typically passes the first test, then (after being backgrounded) fails remaining tests. IF you focus the test window again, tests will start passing again.