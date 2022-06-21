// import logo from './logo.svg';
// import ReactDOM from "react-dom";
import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';

// const rootElement = document
//   .getElementById("root")
//   .attachShadow({ mode: "open" });

// export const Portalize = ({ children }) => {
//   return ReactDOM.createPortal(children, rootElement);
// };

function App() {
  const [retailerId, setRetailerId] = useState('');
  const [retailerToken, setRetailerToken] = useState('');
  return (
   // <Portalize>
   <>
   {retailerToken + retailerId}
      <Header/>
   </>
    //</Portalize>
  );
}

export default App;
