import { getUserLocation } from "./geolocation.js";

getUserLocation()
    .then(coords => console.log(coords))
    .catch(error => console.error(error));
