import React, { useState } from "react";
import classnames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { toTitleCase } from "../../utils/helpers";

const NavigationDropdown = ({
  isTransparent,
  options = [],
  title = "All Event",
  id = "basic-nav-dropdown",
  customClass = "",
  goTo
}) => {
  const [ navShow, setNavShow ] = useState(false)

  return (
    <>
      <NavDropdown
        onClick={() => setNavShow(!navShow)}
        renderMenuOnMount
        title={title}
        id={id}
        className={classnames("nav_dropdown " + customClass, {
          transparent: isTransparent
        })}
      >
        {options.map((option, idx) => (
          <NavDropdown.Item key={idx} onClick={() => goTo(option.link)} className="captialize">
            {toTitleCase(option.value)}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </>
  );
};

export default NavigationDropdown;
