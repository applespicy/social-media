const { MongoClient } = require('mongodb')




module.exports={
    connectToDb: ()=>{
        MongoClient.connect('mongodb://localhost:27017/socialmedia')
        .then((client)=>{
            dbConnection =client.db()
            return cb()
        })
        .catch(err =>{
            console.log(err)
            return cb(err)
        })
    },
    getDb:()=>{}
}