# Scrolls Scroller

## To run:

Requires latest nodejs. Install with ` npm install``. To run locally: `npm start```.

Hosted version: [https://jhaveri.net/scrolls-scroller/](https://jhaveri.net/scrolls-scroller/)

## About

Provides a simple interface for scrolling through and searching elder scrolls cards.

## Requirements

I mostly focused on the plumbing/usability over UI design.  I used React and
node to stand up a simple page that could hit the requirements below.  I set up
hosting for a production version (webpacked assets) at
[https://jhaveri.net/scrolls-scroller/](https://jhaveri.net/scrolls-scroller/)

- [x] Show results in a card grid format with the image prominently displayed.
- [x] Each card displays: Image, Name, Text, Set Name, and Type. Additional fields are optional.
- [x] Display a loading indicator when communicating with the API.
- [x] Use a responsive design that accommodates, at minimum, desktop and mobile.
- [x] Initially, fetch and display the first 20 results returned by the API.
- [x] As the user scrolls down the page, load and append additional cards using "infinite scroll." Retrieve additional pages of results as-needed but do not load more than 20 cards with each request.
- [x] Allow the user to search for cards by Name.
- [x] Use modern open-source web technologies to implement your solution (React, Backbone, Angular, Vue, Underscore, etc.).
- [x] Provide instructions for prerequisites, installation, and application setup and build in a README file.


TODO:
- The main lacking features are tests (I wrote one as an example of how I would test React
components in production code) and visual design polish.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
