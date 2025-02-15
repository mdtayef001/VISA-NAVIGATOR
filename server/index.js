import express from "express";
import cors from "cors";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a4nf0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const visaCollection = client.db("visasDB").collection("visas");
    const usersCollection = client.db("visasDB").collection("users");

    // get for all visas data
    app.get("/visas", async (req, res) => {
      const result = await visaCollection.find().toArray();
      res.send(result);
    });
    // get for all visas data with limit
    app.get("/visasLimit", async (req, res) => {
      const query = visaCollection.find().limit(6);
      const result = await query.toArray();
      res.send(result);
    });

    // get data by id api
    app.get("/visas/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await visaCollection.findOne(query);
      res.send(result);
    });

    // add visa info to the DB
    app.post("/visas", async (req, res) => {
      const visaInfo = req.body;
      const result = await visaCollection.insertOne(visaInfo);
      res.send(result);
    });

    // ---------------------user db--------------------------

    app.get("/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const usersInfo = req.body;
      const result = await usersCollection.insertOne(usersInfo);
      res.send(result);
    });

    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const result = await usersCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/id/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    app.patch("/id/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateData = req.body;
      const updateInfo = {
        $set: {
          countryImage: updateData?.countryImage,
          countryName: updateData?.countryName,
          vistaType: updateData?.vistaType,
          processingTime: updateData?.processingTime,
          description: updateData?.description,
          ageRestriction: updateData?.ageRestriction,
          fee: updateData?.fee,
          validity: updateData?.validity,
          applicationMethod: updateData?.applicationMethod,
        },
      };
      const result = await usersCollection.updateOne(
        filter,
        updateInfo,
        options
      );
      console.log(updateData);
      res.send(result);
    });

    app.delete("/id/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//root
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
