import React, { Component } from "react";
import ReactDOM from "react-dom";
import posed, { Transition } from "react-pose";
import { ReactComponent as ImportedComponent } from "./gruppe.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import firebase from "firebase";
import { AuthUserContext } from "../Session";

//import 278 from "./278.svg";

const StyledBody = styled.div`
  background-color: rgb(22, 22, 49);
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const StyledSVG = styled(ImportedComponent)`
  display: block;
  margin: 250px 600px;
  width: 25;
  height: 25;
`;

function Welcome() {
  return (
    <StyledBody>
      <div className="Start">
        <StyledSVG />
        <div className="schwarmduscher">schwarmduscher</div>
        <li>
          <Link to={ROUTES.POSE} className="schwarm">
            {" "}
            werde jetzt teil unseres schwarms
          </Link>
        </li>
      </div>
    </StyledBody>
  );
}

export default Welcome;
