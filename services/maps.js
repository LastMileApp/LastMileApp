import {API_KEY} from '../config/geoapifyConfig.js';

export async function getLatLong(str) {
    // console.log(API_KEY);
    url = 'https://api.geoapify.com/v1/geocode/search?text=' + str + '&apiKey=' + API_KEY;
    // console.log(url);
    return fetch(url, {
        method: 'GET',
    }).then(response => response.json()) // returns promise
        .then(responseJson => {
            const a = {"coords": { "lat": responseJson["features"][0]["properties"]["lat"], "lon": responseJson["features"][0]["properties"]["lon"] }};
            // console.log(a);
            return a;
        });
}
