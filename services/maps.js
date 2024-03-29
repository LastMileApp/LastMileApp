import { GEO_API_KEY } from '../config/geoapifyConfig.js';
import { BING_API_KEY } from '../config/bingConfig.js';
export async function getLatLong(str) {
    url = 'https://api.geoapify.com/v1/geocode/search?text=' + str + '&apiKey=' + GEO_API_KEY;
    
    return fetch(url, {
        method: 'GET',
    }).then(response => response.json()) // returns promise
        .then(responseJson => {
            const a = { "coords": { "lat": responseJson["features"][0]["properties"]["lat"], "lon": responseJson["features"][0]["properties"]["lon"] } };

            return a;
        });
}

export async function getAddress(str) {
    let arr = str.split(",");
    let lat = arr[0];
    let lon = arr[1];
    url = 'https://api.geoapify.com/v1/geocode/reverse?lat=' + lat + '&lon=' + lon + '&apiKey=' + GEO_API_KEY;
    
    return fetch(url, {
        method: 'GET',
    }).then(response => response.json()) // returns promise
        .then(responseJson => {
            
            const a = responseJson["features"][0]["properties"]["formatted"];
            return a;
        });
}

export async function getMileage(start, end) {
    url = "https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=" + start + "&destinations=" + end + "&travelMode=driving&key=" + BING_API_KEY;
    
    return fetch(url, {
        method: 'GET',
    }).then(response => response.json()) // returns promise
        .then(responseJson => {
            return responseJson["resourceSets"][0]["resources"][0]["results"][0]["travelDistance"];
        });
}
export async function getTimeage(start, end) {
    url = "https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=" + start + "&destinations=" + end + "&travelMode=driving&key=" + BING_API_KEY;
    return fetch(url, {
        method: 'GET',
    }).then(response => response.json()) // returns promise
        .then(responseJson => {
            return responseJson["resourceSets"][0]["resources"][0]["results"][0]["travelDuration"];
        });
}