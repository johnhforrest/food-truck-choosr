# food-truck-choosr

Node.js console application that prints out the currently open food trucks in San Francisco. Uses your current machine's time as a reference point (it assumes you are on PST), and the public data from https://data.sfgov.org/Economy-and-Community/Mobile-Food-Schedule/jjew-r69b.

## Installation

`npm install`

## Running the application

`npm start`

## Example output

```
Food Truck Choosr
Tuesday, 02:00
Page 1 of 0

NAME                     ADDRESS
Julie's Hot Dogs..........2386 MISSION ST
M M Catering..............1200 MISSISSIPPI ST
Street Meet...............100 LARKIN ST
```

## Converting to a web app

Right now this application just runs on the command line, so many of the design decisions were made with that in mind.

Improvements I would make if I were to convert this to a web application:
* Add a caching layer. We could cache the food truck data for each day of the week, and then query that caching layer instead of making additional API calls for every new query. The cache would get updated periodically (maybe nightly?) via a single API call to the original data. This reduces the number of API calls to at most 7 per week.
* Break the data layer and presentation layer into separate applications (i.e., a front-end and back-end). This allows us to scale out each one separately and leverage things like a CDN for the presentation code.
