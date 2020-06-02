//dependencies
import mongoose from 'mongoose';
import MongoClient from 'mongodb';

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