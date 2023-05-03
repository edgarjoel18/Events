import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "../ui/button";

export default function EventItem({ item }) {
  const newDate = new Date(item.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const exploreLink = `/events/${item.id}`;
  return (
    <li className={classes.item}>
      <img src={item.image} alt={item.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{item.title}</h2>
        </div>
        <div className={classes.date}>
          <time>{newDate}</time>
        </div>
        <div className={classes.address}>
          <address>{item.location}</address>
        </div>
        <div className={classes.action}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
}
