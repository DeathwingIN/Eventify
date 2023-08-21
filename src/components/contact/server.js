const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// MongoDB connection string
const uri = "mongodb+srv://jainjayakody:7Y4zR64FRroB8e3a@cluster0.oyagwu0.mongodb.net/clustor0";

app.post("/api/submit-contact", async (req, res) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db("CONTACTFORM");
    const contactsCollection = db.collection("contacts");
    const result = await contactsCollection.insertOne(req.body);
    console.log("Contact form submitted:", result.ops);
    res.status(200).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ message: "An error occurred while submitting the form" });
  } finally {
    client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
