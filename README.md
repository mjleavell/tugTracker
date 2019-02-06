# TugTracker

## Description
TugTracker is an application that allows users to track all the tug boats in their fleet.

## Live Demo
[TugTracker](https://tug-tracker.firebaseapp.com) 

## Technologies Used
* React
* Leaflet
* React-Leaflet
* Reactstrap
* Sass
* Axios
* Prop-Types
* Font Awesome
* Firebase

## Screenshots
*Coming Soon*

## How to run this app
1. Clone down this repo and cd into project.
2. Get API keys by creating a new [firebase project](https://www.firebase.com).
3. Create a marine traffic account [click here](https://www.marinetraffic.com).
4. Get an API key for *Single Vessel Positions* [click here](https://www.marinetraffic.com/en/ais-api-services/detail/ps07/single-vessel-positions/)
4. Copy ```src/helpers/apKeys.js.example``` to ```apiKeys.js``` and add your ```firebaseConfig``` data and ```singleVessel``` key.
5. Replace your uid with existing uid on ```db/tugs.json```.
6. Setup Firebase database using seed data from ```db/tugs.json```.
7. Copy and paste the following database rules into firebase:
```{
  "rules": {
    ".read": true,
    ".write": true,
    "tugs": {
      ".indexOn": "uid",
    },
  }
}
```
8. In your terminal, run ```npm install``` in the root directory.
9. Type ```npm start``` to serve up app locally.

## Contributors
[Maggie Leavell](https://github.com/mjleavell)
