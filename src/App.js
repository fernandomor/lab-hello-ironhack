import React from 'react';
import './App.css';

function NavUp() {
  return(
    <div className="navbar-iron">
    <img src="/ironhack-logo.svg" />
    <img src="/menu-top.svg" />
  </div>
  )
}

function Atomitos(atomos){
  return(
      <img className="atomitos" width={atomos.size}  src="/react-logo.svg" />
  )
}

function Banner(){
  return(
    <div className="inicio">
      <NavUp />
      <div className="texto">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
        <button className="botonblanco">Awesome!</button> 
        <div className="absbanner">
          <Atomitos size="200px"/>
          <Atomitos size="100px"/>
          <Atomitos size="150px"/>
        </div>
      </div>
    </div>
  )
}

function Cuadrito(props){
  return(
    <div>
      <img src={props.img}/>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}

function Footer(){
  return(
    <div className="footer">
      <Cuadrito img="/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs"/>
      <Cuadrito img="/icon2.png" title="Components" text="Build encapsulated components that manage their state"/>
      <Cuadrito img="/icon3.png" title="Single-Way" text="A set of innmutable values are passed to the component´s"/>
      <Cuadrito img="/icon4.png" title="JSX" text="statically - typed,desing to run on modern browsers "/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
     <Banner />
     <Footer />
    </div>
  );
}

export default App;
