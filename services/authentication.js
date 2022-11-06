import {db} from "../db/db.js"

export function getUID(){
    return 'a';
}

export function getBalance(){
   return db.user[getUID()].balance;
}
export function deduct(money){
    db.user[getUID()].balance -= money;
}