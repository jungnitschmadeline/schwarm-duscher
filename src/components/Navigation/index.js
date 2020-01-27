import React from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../Session";
import { ReactComponent as ImportedComponent } from "./gruppe.svg";
import styled from "styled-components";
import * as ROUTES from "../../constants/routes";
import Clock from "react-digital-clock";

const StyledSVG = styled(ImportedComponent)`
  display: block;
  margin: -15px 500px;
  width: 10;
  height: 10;
`;

const Navigation = () => (
  <div>
    {" "}
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = () => (
  <div class="menu">
    <Link to={ROUTES.LANDING}>karte</Link>
    <Link class="statistik" to={ROUTES.ACCOUNT}>
      statistik(account)
    </Link>
    <Clock hour12={false} />
  </div>
);

const NavigationNonAuth = () => (
  <div class="menu">
    <StyledSVG />
    <div class="menutext">schwarmduscher</div>

    <div className="clock">
      <Clock hour12={false} className="clock" />
    </div>
  </div>
);

export default Navigation;
