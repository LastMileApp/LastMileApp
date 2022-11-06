// import { getDatabase, ref, get, onValue } from "firebase/database";


// const db = getDatabase();
// const dbRef = ref(db, 'shipment');

// shipments=[];
// function printData(data){
//     console.log(data);
// }
// export function loadShipments(){
//     onValue(dbRef, (snapshot) => {
//         const data = snapshot.val();
//         shipments.push(data);
//     });
// }
// export function shipmentsGet  () {
//     console.log(shipments);
//     return shipments;
    
// }
import {db} from "../db/db.js"
import {getLatLong} from "../services/maps.js"
import {getMileage} from "../services/maps.js"
const BUFFER = 8.0467;
function getAllShipments(){
    return db.shipment;
}
function getShipmentPackageData(shipment){
    return db.package[shipment.package_id];
}
function getProperFormattingLatLon(lat, lon){
    return lat + "," + lon;
}
export async function getPossibleShipments(user_start, user_end){
    let possible_shipments = [];
    const route_1 = await getMileage(user_start, user_end).then((data) => {
        return data;
    });

    let all_shipments = getAllShipments();
    console.log(all_shipments);
    for (const s in all_shipments){
        const package_start_lat = db["shipment"][s]["start_point"]["latitude"];
        const package_start_long = db["shipment"][s]["start_point"]["longitude"];
        
        const package_end_lat = db["shipment"][s]["end_point"]["latitude"];
        const package_end_long = db["shipment"][s]["end_point"]["longitude"];
        
        const package_start = getProperFormattingLatLon(package_start_lat, package_start_long);
        const package_end = getProperFormattingLatLon(package_end_lat, package_end_long);
        
        const route_2a = await getMileage(user_start, package_start).then((data) => {
            return data;
        });
        const route_2b = await getMileage(package_start, package_end).then((data) => {
            return data;
        });
        const route_2c = await getMileage(package_end, user_end).then((data) => {
            return data;
        });
        const route_2 = route_2a + route_2b + route_2c;
        console.log("route_1: " + route_1);
        console.log("route_2: " + route_2);
        if (Math.abs(route_2 - route_1) <= BUFFER){
            possible_shipments.push(s);
        }
    }

    console.log("OMG OMG POSSIBLE SHIPMENT??? ");
    console.log(possible_shipments);
    return possible_shipments;
}
