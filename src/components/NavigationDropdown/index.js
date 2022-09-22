import React, { useState } from "react";
import classnames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { toTitleCase } from "../../utils/helpers";
import Mask from "../Mask";

const NavigationDropdown = ({
  isTransparent,
  options = [],
  title = "All Event",
  id = "basic-nav-dropdown",
}) => {
  const [ navShow, setNavShow ] = useState(false)
  const navigate = useNavigate();
  const [maskState, setMaskState] = React.useState(0);

  function goTo(url) {
    setMaskState(1);
    setTimeout(() => {
      setMaskState(2);
      setTimeout(() => {
        setMaskState(3);
        navigate(url);
        setTimeout(() => {
          setMaskState(0);
        }, 2000)
      }, 1500);
    }, 100);
  }
  return (
    <>
      <div className={maskState===1?'m-active':(maskState===2?'m-active state1':(maskState===3?'m-active state2':''))}>
        <Mask />
      </div>
      <NavDropdown
        onClick={() => setNavShow(!navShow)}
        renderMenuOnMount
        title={title}
        id={id}
        className={classnames("nav_dropdown", {
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
