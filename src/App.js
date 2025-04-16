import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import Alert from './components/Alert';
import TextForm from './components/TextForm'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const[mode,setMode] = useState('light')
  const[alert,setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor ='#042743'
      showAlert("Dark mode has been enabled","success")
      document.title ='Textutils - Dark Mode'
      // setInterval(()=>{
      //   document.title = 'Textutils is amazing'
      // },2000)

      // setInterval(()=>{
      //   document.title = ' Install Textutils Now'
      // },1500)
    }else{
      setMode  ('light');
      document.body.style.backgroundColor ='white'
      showAlert("Light mode has been enabled","success")
      document.title ='Textutils - Light Mode'
    }
     
  }
  return (
 <>
 {/* <Router> */}
 <Navbar title= "Textutils" aboutText="About"  mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 {/* <Navbar/> */}
 <div className="container my-3">
 {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
             <TextForm heading ="Enter the text to analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
          {/* </Route>
  </Switch> */}
  </div>
  {/* </Router> */}
 </>
  );
}

export default App;
