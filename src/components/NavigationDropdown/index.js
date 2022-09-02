import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { toTitleCase } from "../../utils/helpers";

const NavigationDropdown = ({
  options = [],
  title = "All Event",
  id = "basic-nav-dropdown",
}) => {
  return (
    <NavDropdown title={title} id={id} className="nav_dropdown">
      {options.map((option) => (
        <NavDropdown.Item as={Link} to={option.link} className="captialize">
          {toTitleCase(option.value)}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default NavigationDropdown;
