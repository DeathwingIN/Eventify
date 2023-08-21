import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Back from "../common/back/Back";

import event1 from "./images/events1.png";
import event2 from "./images/events2.png";
import event3 from "./images/events3.png";
import event4 from "./images/events4.png";
import event5 from "./images/events5.png";
import event6 from "./images/events6.png";
import event7 from "./images/events7.png";

const dummyData = [
  {
    id: 1,
    title: "Lizard 1",
    image: event1, 
    description: "Description for lizard 1...",
  },
  {
    id: 2,
    title: "Lizard 2",
    image: event2, 
    description: "Description for lizard 2...",
  },
  {
    id: 2,
    title: "Lizard 2",
    image: event2, 
    description: "Description for lizard 2...",
  },
  {
    id: 2,
    title: "Lizard 2",
    image: event3, 
    description: "Description for lizard 2...",
  },
  {
    id: 2,
    title: "Lizard 2",
    image: event4, 
    description: "Description for lizard 2...",
  },
  {
    id: 2,
    title: "Lizard 2",
    image: event5, 
    description: "Description for lizard 2...",
  },
  {
    id: 2,
    title: "Lizard 2",
    image: event6, 
    description: "Description for lizard 2...",
  },
  {
    id: 2,
    title: "Lizard 2",
    image: event7, 
    description: "Description for lizard 2...",
  },

  
];

export default function GridOfCards() {
  return (
    <>
      <Back title="Events" />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-4 mr-4 ml-4">
        {dummyData.map((data) => (
          <Card key={data.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140, transition: "transform 0.3s" }}
              image={data.image}
              title={data.title}
              className="transform-gpu hover:scale-110"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                className="hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-500 hover:text-white"
              >
                More Information
              </Button>
            </CardActions>
          </Card>
        ))}
      </section>
    </>
  );
}
