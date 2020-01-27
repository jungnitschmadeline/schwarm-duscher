import React, { Component } from "react";
import ReactDOM from "react-dom";
import posed, { Transition } from "react-pose";
import { CSSTransition } from "react-transition-group";
import firebase from "firebase";

//HELLBLAU 1L
const Box = posed.div({
  hidden: {
    scale: 1.2,
    opacity: 0.5,
    transition: {
      type: "spring",
      stiffness: 10,
      damping: 0,
      opacity: 0.5
    }
  }
});

//DUNKELBLAU
const Box1 = posed.div({
  hidden: {
    scale: 1.3,
    opacity: 0.5,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 0,
      opacity: 0.5
    }
  }
});

const Tessa = posed.div({
  hidden: {
    scale: 1.1,
    opacity: 0.5,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 0,
      opacity: 0.5
    }
  }
});

const Example = posed.div({
  visible: { opacity: 1 }
});

const INITIAL_STATE = {
  data: null
};

class PosePage extends Component {
  state = {
    isVisible: true
  };

  componentDidMount(): void {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
    this.firebaseCall();
  }

  firebaseCall = () => {
    const database = firebase.database();
    var ref = database.ref("werte samstag");
    ref.on(
      "value",
      data => {
        var werte = data.val();
        this.setState({
          ...this.state,
          data: werte
        });
      },
      e => {
        console.log(e);
      }
    );
  };

  render() {
    const { isVisible } = this.state;
    const { data } = this.state;

    return (
      <div className="boxa">
        <div class="menge"></div>
        <Box class="textaa" pose={isVisible ? "visible" : "hidden"}></Box>
        <div className="box1">
          <div class="menge"></div>
          <Box1 class="textb" pose={isVisible ? "visible" : "hidden"}></Box1>
        </div>
        <div className="box2">
          <div class="menge"></div>
          <Box class="texta" pose={isVisible ? "visible" : "hidden"}></Box>
        </div>
        <CSSTransition
          in={true}
          classNames="fade"
          appear={true}
          timeout={10000}
        >
          <div className="box">
            <div class="menge">{`${data}l`}</div>
            <Tessa class="text" pose={isVisible ? "visible" : "hidden"}></Tessa>
          </div>
        </CSSTransition>
        <div className="box3">
          <div class="menge">{``}</div>
          <Box class="textc" pose={isVisible ? "visible" : "hidden"}></Box>
        </div>
        <div className="box4">
          <div class="menge"></div>
          <Box1 class="textd" pose={isVisible ? "visible" : "hidden"}></Box1>
        </div>
        <div className="box5">
          <div class="menge"></div>
          <Box class="texte" pose={isVisible ? "visible" : "hidden"}></Box>
        </div>
        <div className="box6">
          <div class="menge"></div>
          <Box1 class="textf" pose={isVisible ? "visible" : "hidden"}></Box1>
        </div>
        <div className="box7">
          <div class="menge"></div>
          <Box class="textg" pose={isVisible ? "visible" : "hidden"}></Box>
        </div>
        <div className="box2">
          <div class="menge"></div>
          <Box class="texta" pose={isVisible ? "visible" : "hidden"}></Box>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));

export default PosePage;
