import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Firebase, {FirebaseContext} from './components/Firebase';
import * as firebase from 'firebase';


ReactDOM.render(
    <FirebaseContext.Provider value ={new Firebase()}>
<App />
</FirebaseContext.Provider>,
 document.getElementById('root'),
);

   
const SomeComponent = () => (
    <FirebaseContext.Consumer>
      {firebase => {
        return <div>I've access to Firebase and render something.</div>;
      }}
    </FirebaseContext.Consumer>
  );
  
  export default SomeComponent;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
