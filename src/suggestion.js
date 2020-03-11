import React from "react";

const Suggestions = (props) => {
    const options = props.results.map(r => (
      <li className= "li"
      key={r.id}>
        {r}
      </li>
    ))
    return <ul className="ul">{options}</ul>
}

export default Suggestions;
