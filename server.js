import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
// import mongoose from "mongoose";
// import feed from "./models/feedModel.js";

const port = 5000 || process.env.PORT;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// connect to mongoDB
// mongoose.connect(process.env.MONGODB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB connected..."))
// .catch(err => console.log(err));

// routes
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api/feed", (req, res) => {
  const feed = [
    {
      id: 12,
      userImage:
        "https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664__340.jpg",
      username: "Mutuma kyky",
      displayName: "@mutumakyky",
      postSong: "999 problems but a react ain't one",
      postVideo:
        "https://v16-webapp.tiktok.com/6ce13d22b69d2eff75c3f0cf04cc13f2/61d24901/video/tos/alisg/tos-alisg-pve-0037c001/2b6df3b5db9b4a2b990f98b62b4bc0ab/?a=1988&br=3634&bt=1817&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FBqkag3-I&l=2022010218525901024524314120FA15A2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ang4OjY6Zm02ODMzODczNEApZjc3NDw2ZWUzNzw6aDhmN2cybmhscjRnb3JgLS1kMS1zc2E2YzMvYTU0YjMyLmBfLTI6Yw%3D%3D&vl=&vr=",
      postLikes: 786,
      postComments: 575,
      postShares: 55,
    },
    {
      id: 668,
      userImage:
        "https://cdn.pixabay.com/photo/2016/11/29/20/22/girl-1871104__340.jpg",
      username: "Alexis san",
      displayName: "@alexissan",
      postSong: " love you like a sister",
      postVideo:"https://storage.coverr.co/videos/qz66H3d100HfYlmgJtQDPOemAtEE9mWF01?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjQxMTUyMDY4fQ.J4w4yTQ3W0L0uM-WIYy77U8L8EgMcxPEhunngskrZts",
      postLikes: 7125,
      postComments: 575,
      postShares: 55,
    },
  ];
  res.send(feed);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
