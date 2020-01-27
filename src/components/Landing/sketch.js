import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';

import firebase from "firebase";



const Box = posed.div({
  hidden: {  
    scale: 1.1,
    opacity: 0.5,
    transition: {
      type: 'spring',
      stiffness: 10,
      damping: 0 ,
      opacity: 0.5,

   },
    }
    
  
});


const Box1 = posed.div({
  hidden: {  
    scale: 1.3,
    opacity: 0.5,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 0 ,
      opacity: 0.5,

   },
    }
    
  
});

const Example = posed.div({
  visible: { opacity: 1 }
});

const INITIAL_STATE ={
  error: null,
  data:null
}

class LandingPage extends Component {


    constructor(){
  
      super()
      this.state = {time:new Date()}
    }
    currentTime()
    {
      this.setState({
      time: new Date()

      })
    }
    componentWillMount()
    {
setInterval(()=> this.currentTime(), 1000)

    }
  
  

  state = { 
    isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }


  /*
  constructor(props){
    super(props);
    this.state ={...INITIAL_STATE};
  }*/
    firebaseCall = () => {
  
      const database = firebase.database();
      var ref = database.ref('werte samstag');
      ref.on('value',(data) => {
  
    var werte = data.val();
    this.setState({
      ...this.state,
      data:werte
    })
      },
      (e) => {console.log(e)});
    }
/*

    componentDidMount():void{
      this.firebaseCall()
    }
*/

  render() {

   
    const { isVisible } = this.state;
    const { error, data} = this.state;

    return (  
 
    <div className="box"><div class="menge">{`duschmenge: ${data}`}
	 </div>
  <Box class="text" pose={isVisible ? 'visible' : 'hidden'}></Box>

  <h1 class="uhrzeit">
     {this.state.time.toLocaleTimeString()}
   </h1>
  <div className="box2"><div class="menge">{`duschmenge: ${data}`}
	 </div>
   <Box1 class="texta" pose={isVisible ? 'visible' : 'hidden'}></Box1>

 </div>
  </div>

  )
    
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));

export default LandingPage;