import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Feed from "./models/feedModel.js";

const PORT = 5000 || process.env.PORT;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// connection to database 
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log("Error connecting",err));

// routes
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api/feed", (req, res) => {
  const feed = []
  res.status(200).send(feed);
});

// post api to add data to db
app.post("/api/feed", (req, res) => {
  const dbFeed = req.body;
  Feed.create(dbFeed, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});



app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
