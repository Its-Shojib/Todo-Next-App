const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const port = process.env.DB_PORT || 5000

/* Using Middleware */
app.use(cors({
  origin: [
    'http://localhost:3000',
  ],
  credentials: true
}));
app.use(express.json());

/* Starting MongoDB */
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.oglq0ui.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    await client.connect();
    const todoCollection = client.db("Todo-Next-DB").collection('tasks');

    app.post('/create-task', async (req, res) => {
        const newTask = req.body;
        console.log(newTask);
        const result = await todoCollection.insertOne(newTask);
        if(result.insertedId){
            res.json({
                result: true,
                msg: 'Task created successfully'
            });
        }else{
            res.json({
                result: false,
                msg: 'Task not created'
            });
        }
    });

    app.get('/get-task', async(req,res)=>{
        const tasks = await todoCollection.find().toArray();
        res.json({
            result: true,
            tasks: tasks
        });
    });

    app.delete('/delete-task/:id', async(req,res)=>{
        const id = req.params.id;
        const result = await todoCollection.deleteOne({_id: new ObjectId(id)});
        if(result.deletedCount){
            res.json({
                result: true,
                msg: 'Task deleted successfully'
            });
        }else{
            res.json({
                result: false,
                msg: 'Task not deleted'
            });
        } 
    });

    app.put('/update-task/:id', async(req,res)=>{
        const id = req.params.id;
        let query = {_id : new ObjectId(id)};
        let updateTask ={
            $set: {
                status: true,
            }
        }
        const result = await todoCollection.updateOne(query, updateTask);
        if(result.modifiedCount){
            res.json({
                result: true,
                msg: 'Task updated successfully'
            });
        }else{
            res.json({
                result: false,
                msg: 'Task not updated'
            });
        }

    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Todo app is running!')
})

app.listen(port, () => {
  console.log(`Todo app is listening on port ${port}`)
})