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
function getAllShipments(){
    return db.shipment;
}
function getShipmentPackageData(shipment){
    return db.package[shipment.package_id];
}
export function getPossibleShipments(user_start, user_end){
    console.log(user_start);
    console.log(user_end);
    let possible_shipments = [];
    // let all_shipments = getAllShipments();
    // for (const shipment in all_shipments){
    //     package_start_lat = shipment.start_point.latitude;
    //     package_start_long = shipment.start_point.longitude;
    //     package_end_lat = shipment.end_point.latitude;
    //     package_end_long = shipment.end_point.longitude;
        

    // }
    return possible_shipments;
}
