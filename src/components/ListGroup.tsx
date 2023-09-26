import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items && items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items &&
          items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                console.log(selectedIndex);
              }}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  );
}

export default ListGroup;
