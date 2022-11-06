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
import {getMileage, getTimeage} from "../services/maps.js"
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
function getBasicShipmentData(shipment){
    const company_id = db["shipment"][shipment]["company_id"]
    console.log(company_id)
    return {
        "collateral": db["package"][shipment]["collateral"],
        "award": db["shipment"][shipment]["award"],
        "company_name": db["company"][company_id]["name"],
        "company_email": db["company"][company_id]["email"],
        "company_img": db["company"][company_id]["company_img"],
        "added_miles": 0,
        "added_time": 0,
        "package_id": shipment ,
        "user_start":"",
        "user_end":"",
        "package_start":"",
        "package_end":""
    }
}
export async function getPossibleShipments(user_start, user_end){
    let possible_shipments = [];
    const route_1_m = await getMileage(user_start, user_end).then((data) => {
        return data;
    });

    const route_1_t = await getTimeage(user_start, user_end).then((data) => {
        return data;
    });

    let all_shipments = getAllShipments();
    // console.log(all_shipments);
    for (const s in all_shipments){
        const package_start_lat = db["shipment"][s]["start_point"]["latitude"];
        const package_start_long = db["shipment"][s]["start_point"]["longitude"];
        
        const package_end_lat = db["shipment"][s]["end_point"]["latitude"];
        const package_end_long = db["shipment"][s]["end_point"]["longitude"];
        
        const package_start = getProperFormattingLatLon(package_start_lat, package_start_long);
        const package_end = getProperFormattingLatLon(package_end_lat, package_end_long);
        
        const route_2a_m = await getMileage(user_start, package_start).then((data) => {
            return data;
        });
        const route_2b_m = await getMileage(package_start, package_end).then((data) => {
            return data;
        });
        const route_2c_m = await getMileage(package_end, user_end).then((data) => {
            return data;
        });

        const route_2a_t = await getTimeage(user_start, package_start).then((data) => {
            return data;
        });
        const route_2b_t = await getTimeage(package_start, package_end).then((data) => {
            return data;
        });
        const route_2c_t = await getTimeage(package_end, user_end).then((data) => {
            return data;
        });
        const route_2_m = route_2a_m + route_2b_m + route_2c_m;

        const route_2_t = route_2a_t + route_2b_t + route_2c_t;

        // console.log(route_2a_m, route_2b_m, route_2c_m);    
        // console.log(route_1_m, route_2_m);
        // console.log(route_1_t, route_2_t);
        if (Math.abs(route_2_m - route_1_m) <= BUFFER){
            const shipment_data = getBasicShipmentData(s);
            shipment_data["added_miles"] = Math.abs(route_2_m - route_1_m).toFixed(2);
            shipment_data["added_time"] = Math.abs(route_2_t - route_1_t).toFixed(2);
            shipment_data["user_start"] = user_start;
            shipment_data["user_end"] = user_end;
            shipment_data["package_start"] = package_start;
            shipment_data["package_end"] = package_end;
            
            possible_shipments.push(shipment_data);
        }
    }

    console.log("OMG OMG POSSIBLE SHIPMENT??? ");
    console.log(possible_shipments);
    return possible_shipments;
}
