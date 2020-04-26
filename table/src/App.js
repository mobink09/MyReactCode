import React from "react";
import "./App.css";


function Button(){
  return <button>Buy Now</button>
}

function Td(props) {
  return (
    <tr>
      <td>{props.yearValue}</td>
      <td>{props.modelValue}</td>
      <td>{props.priceValue}</td>
      <td><Button /></td>
    </tr>
  );
}

function Th(props) {
  return (
    <tr>
      <th>{props.year}</th>
      <th>{props.model}</th>
      <th>{props.price}</th>
      <th>{props.buy}</th>
    </tr>
  );
}

function Table(props) {
  return (
    <table>
      <Th year="Years" model="Model" price="Price" buy="Buy" />
      <Td yearValue = {2019} modelValue = {'M'} priceValue = {"$70000"}/>
      <Td yearValue = {2018} modelValue = {'O'} priceValue = {"$60000"}/>
      <Td yearValue = {2020} modelValue = {'B'} priceValue = {"$75000"}/>
      <Td yearValue = {2018} modelValue = {'I'} priceValue = {"$70000"}/>
      <Td yearValue = {2016} modelValue = {'N'} priceValue = {"$100000"}/>
      <Td yearValue = {2019} modelValue = {'A'} priceValue = {"$70000"}/>
      <Td yearValue = {2019} modelValue = {'R'} priceValue = {"$20000"}/>
      <Td yearValue = {2019} modelValue = {'S'} priceValue = {"$30000"}/>
    </table>
  );
}

function App(props) {
  return (
    <div className= "container">
      <h1>{props.heading}</h1>
      <Table />
    </div>
  );
}

export default App;
