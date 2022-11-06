import { GEO_API_KEY } from '../config/geoapifyConfig.js';
import { BING_API_KEY } from '../config/bingConfig.js';
export async function getLatLong(str) {
    // console.log(API_KEY);
    url = 'https://api.geoapify.com/v1/geocode/search?text=' + str + '&apiKey=' + GEO_API_KEY;
    // console.log(url);
    return fetch(url, {
        method: 'GET',
    }).then(response => response.json()) // returns promise
        .then(responseJson => {
            // console.log(responseJson);
            const a = { "coords": { "lat": responseJson["features"][0]["properties"]["lat"], "lon": responseJson["features"][0]["properties"]["lon"] } };

            return a;
        });
}

export async function getMileage(start, end) {
    url = "https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=" + start + "&destinations=" + end + "&travelMode=driving&key=" + BING_API_KEY;
    // console.log(url);
    return fetch(url, {
        method: 'GET',
    }).then(response => response.json()) // returns promise
        .then(responseJson => {
            // console.log(responseJson["resourceSets"][0]["resources"][0]["results"][0]["travelDistance"]);
            return responseJson["resourceSets"][0]["resources"][0]["results"][0]["travelDistance"];
        });
}