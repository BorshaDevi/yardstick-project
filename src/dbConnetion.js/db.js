const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DATABase_Connection;
let db;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const connectDB=async()=>{
  if(db) return ('Database Connected');
  try{
    db=await client.connect('Finance')
    return db;
  }
  catch{
    console.error()
  
  }
}
export default connectDB;