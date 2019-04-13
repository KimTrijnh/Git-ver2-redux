import React, { Component } from 'react'
import NavBar from '../Components/Navbar/Navbar'
import Main from '../Components/Main/Main'


const clientId = process.env.REACT_APP_CLIENT_ID;



class App extends React.Component {
    constructor() {
        super();

        const existingToken = sessionStorage.getItem('token');
        const accessToken = (window.location.search.split("=")[0] === "?access_token") ? window.location.search.split("=")[1] : null;
      
        if (!accessToken && !existingToken) {
          window.location.replace(`https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}`)
        }
      
        if (accessToken) {
          console.log(`New accessToken: ${accessToken}`);
      
          sessionStorage.setItem("token", accessToken);
          this.state = {
              token: accessToken
          }
        }
      
        if (existingToken) {
          this.state = {
            token: existingToken
          };
        }    
      }


      render(){
          return(
            <div className="App">
            <NavBar />
            <Main />
            </div>
          )
      }
       
}



export default App