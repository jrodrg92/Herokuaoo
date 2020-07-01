//dependencies
import mongoose from 'mongoose';
import MongoClient from 'mongodb';

import mysql from 'mysql';

//config
import config from '../../config';

class Bd {

    constructor(){
        MongoClient.connect(config.api.bdurl, config.api.bdoptions)
            .then(result => {
                this.setBd(result.db('devBilnow'));
            }).catch(err => {
                console.log(err);
            });

            const connection = mysql.createConnection({
                host:'85.10.205.173',
                user:'root1234567',
                password:'6iySq3GdKTch58B',
                database:'devbilnow'
            })
            
            connection.connect((err) => {
                if (err) throw err;
                console.log('Connected!');
              });
        }
    
    setBd(bd){
        this.bd = bd;
    }
    
    getBd(){
        return this.bd;
    }

    getCollection(type){
        return this.getBd().collection(type);
    }

}



export default Bd;