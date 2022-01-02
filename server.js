import express from "express";
const app = express();
import cors from "cors";

const port = 5000 || process.env.PORT;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api/feed", (req, res) => {
  const feed = [
    {
      id: 1,
      user: {
        id: 1,
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/",
      },
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/",
      },
    },
  ];
  res.send(feed);

});

app.listen(port, () => console.log(`App listening on port ${port}!`));