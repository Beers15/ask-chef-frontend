# Ask Chef - Frontend

<img src="./src/img/ask-chef-logo.png" alt="drawing" width="300"/>

### Site deployed [here]( https://ask-chef.netlify.app)
**Author**: Alexander Beers

**Version**: 2.1.3

## Overview
Ask Chef is a website that help users come up with ideas for meal choices and recipes based off the data input by the user. Data that the user can input to receive corresponding recipes will include a list of ingredients, answers to provided prompts, nutrient values, and more. Results can be saved to a customizable profile where they can be modified as desired.

## Architecture

Main libraries used: ReactJS, Axios, React-Bootstrap, auth0, react-flash-message, react-multi-carousel, react-tabs-redux

The [Spoonacular API](https://spoonacular.com/food-api/docs) was used for all recipe resource data. The frontend for this site is hosted on Netlify. 

## Change Log (Starting with v2.0.0)

09-29-2021: 1:00pm - Application now has a search tab component that wraps ingredient search form (and other search forms in future). Quick switching between recipe search types is now possible. Ask Chef page restyled.

10-1-2021: 11:00am - Landing page carousel now displays multiple items at once and has added functionality. Homepage restyled.

10-5-2021: 1:00pm - Add question search recipe form to SearchTabs Component that retrieves desired cuisine type, meal type, dietary restiction, diet type, and cookware data from user.

10-6-2021: 3:30pm - Link question search form with Ask-Chef api. User can now recieve recipes from question form data.

10-11-2021: 12:00pm - Add Detailed Modal to recipe cards that displays the various info that's fetched from ask-chef forms.

10-13-2021: 2:30PM - Add flash messages to notify user of various actions.
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations
Patrick Laurion, Antoine Charette, and Rachel Freeland were the other developers for the first version of this app. 

The front-end and back-end for that version can be found at 

[https://github.com/Team-Burrito-Supreme/ask-chef-frontend](https://github.com/Team-Burrito-Supreme/ask-chef-frontend) and [https://github.com/Team-Burrito-Supreme/ask-chef-backend](https://github.com/Team-Burrito-Supreme/ask-chef-backend)
