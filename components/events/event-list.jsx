import EventItem from "./event-item";
import classes from "./event-list.module.css";

export default function EventList({ items }) {
  const renderItems = items.map((item) => {
    return <EventItem key={item.id} item={item} />;
  });

  return <ul className={classes.list}>{renderItems}</ul>;
}
