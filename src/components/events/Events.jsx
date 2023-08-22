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
    title: "Weddings",
    image: event1,
    description:
      "  Create your dream wedding with our personalized planning services. From enchanting venues to exquisite décor, we'll make your special day truly magical.",
  },
  {
    id: 2,
    title: " Corporate Events",
    image: event2,
    description:
      " Elevate your company's image with meticulously organized corporate events. From conferences to team-building retreats, we ensure professionalism and success.",
  },
  {
    id: 2,
    title: " Social Gathering",
    image: event2,
    description:
      " Whether it's a family reunion or a casual get-together, our event planning services make every moment unforgettable. Relax and enjoy while we take care of the details.",
  },
  {
    id: 2,
    title: "Musical Events",
    image: event3,
    description:
      "Bring the rhythm to life with our musical event planning. From live concerts to music festivals, we curate extraordinary experiences for music enthusiasts.",
  },
  {
    id: 2,
    title: " Trade Shows",
    image: event4,
    description:
      "Drive business growth with well-organized trade show exhibits. We ensure a dynamic environment that attracts visitors and maximizes your brand's visibility.",
  },
  {
    id: 2,
    title: "Festivals",
    image: event5,
    description:
      " Immerse yourself in the excitement of festivals crafted to perfection. From cultural celebrations to community events, we bring people together for joyous occasions.",
  },
  {
    id: 2,
    title: "Promotions",
    image: event6,
    description:
      " Boost your brand's visibility with captivating promotional events. We create engaging campaigns that leave a lasting impression on your target audience.",
  },
  {
    id: 2,
    title: "Virtual/Hybrid Event",
    image: event7,
    description:
      "Transform your events into engaging virtual or hybrid experiences. We harness technology to connect audiences, deliver content, and create memorable interactions.",
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
