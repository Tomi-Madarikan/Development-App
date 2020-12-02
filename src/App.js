import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FilteredList from './FilteredList.js';
import notebooks from './Images/notebooks.jpeg';
import envelopes from './Images/envelopes.jpeg'; 
import pencils from './Images/pencils.jpeg'
import highlighters from './Images/highlighters.jpeg'; 
import tapes from './Images/tapes.jpeg'; 
import stickers from './Images/stickers.jpeg'; 
import sharpeners from './Images/sharpeners.jpeg';
import scissors from './Images/scissors.jpeg'; 
import pens from './Images/pens.jpeg'
import pencilcases from './Images/pencilcases.jpeg'; 
import rulers from './Images/rulers.jpeg'; 
import erasers from './Images/erasers.jpeg'; 

const productList = [
  { name: "Pencils", size: "Medium", colour: "blue", price:5.00, image: pencils},
  { name: "Pens", size: "Large", colour: "blue", price:7.00, image:  pens },
  { name: "Erasers", size: "Small", colour: "grey", price:2.99, image:  erasers },
  { name: "Sharpeners", size: "Medium", colour: "green", price:4.00, image:  sharpeners },
  { name: "Highlighters", size: "Small", colour: "green",  price:8.00, image:  highlighters },
  { name: "Envelopes", size: "Small", colour: "grey", price:6.99, image: envelopes },
  { name: "Notebooks", size: "Large",colour: "green", price:11.00, image:  notebooks },
  { name: "Stickers", size: "Large",colour: "green", price:9.00, image:  stickers },
  { name: "Tapes", size: "Medium",  colour: "blue", price:3.99, image:  tapes },
  { name: "Pencil cases", size: "Small", colour: "grey", price:14.99, image:  pencilcases },
  { name: "Scissors", size: "Medium",  colour: "blue", price:9.99, image:  scissors },
  { name: "Rulers", size: "Small", colour: "grey", price:3.99, image:  rulers }
 ]


class App extends Component{

  
   
  render () {
    return (
    <div className="App">
      <div>
		    <FilteredList list={productList} />
    </div>
  </div>

  );

      }
}
export default App;
  
