import React from 'react';
import {Nav} from 'react-bootstrap';
import './index.css';
import DisplayList from './DisplayList.js'

// contains filtering/sorting/aggregator methods
class FilteredList extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        size: "All",
        colour: "All",
        order: "All",
        cartlist: [],
        totalprice: 0
      };
    //   this.onAggregatorAdd = this.onAggregatorAdd.bind(this)
    }

    onSelectSort = event  => {
        this.setState({
            order: event
        })
    };

    matchesSort = (item1, item2)  => {
        if(this.state.order === "highestToLowest"){
            return item2.price - item1.price
        }
        else if(this.state.order === "lowestToHighest"){
            return item1.price - item2.price
        }
        else if(this.state.order === "none"){
            return
        }
    };
    
  
    onSelectFilterSize = event => {
        this.setState({
            size: event
            })
        };
        
    onSelectFilterColour = event => {
        console.log(event)
        this.setState({
            colour: event
            })
        };

    matchesFilterSize = item => {
            if(this.state.size === "All") { 
                return item
            } else if (this.state.size === item.size) {
                return item
            } else {
                return 
            }
        };

    matchesFilterColour = item => {
        if(this.state.colour === "All") { 
            return item
        } else if (this.state.colour === item.colour) {
            return item
        } else {
            return 
        }
    };
    
    // create the aggregator

    
    onAggregatorAdd = item => {
        const updatedCart = [...this.state.cartlist, item]
        this.setState({
            cartlist: updatedCart,
            totalprice:  this.state.totalprice + item.price          
        });
    }

    onAggregatorRemove = item => {
        var contains = false
        for (var i = 0; i < this.state.cartlist.length; i++) {
            if (this.state.cartlist[i] === item){
                contains = true
            }
        }    
        if (contains === true){
            this.setState({
                totalprice:  this.state.totalprice - item.price,                 
                cartlist: this.removeFirst(this.state.cartlist,item)                        
            });
        }
        return;
    
    }

    removeFirst(src, element) {
        const index = src.indexOf(element);
        if (index === -1) return src;
        return [...src.slice(0, index), ...src.slice(index + 1)];
      }
   
    render() { 
        return(
            <div class="displayList">
                <h1>~The Stationery Shop~</h1>    
                <div class="bar">
                <ul>
                <li>Filter by Size:</li>
                    <li><Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterSize}>All</Nav.Link></Nav.Item></li>
                    <li><Nav.Item><Nav.Link eventKey="Small" onSelect={this.onSelectFilterSize}>Small</Nav.Link></Nav.Item></li>
                    <li><Nav.Item><Nav.Link eventKey="Medium" onSelect={this.onSelectFilterSize}>Medium</Nav.Link></Nav.Item></li>
                    <li><Nav.Item><Nav.Link eventKey="Large" onSelect={this.onSelectFilterSize}>Large</Nav.Link></Nav.Item></li>
                </ul> 
                <ul>
                    <li>Filter by Colour:</li>
                    <li><Nav.Item><Nav.Link eventKey="All" value="All" onSelect={this.onSelectFilterColour}>All</Nav.Link></Nav.Item></li>
                    <li><Nav.Item><Nav.Link eventKey="green" onSelect={this.onSelectFilterColour}>green</Nav.Link></Nav.Item></li>
                    <li><Nav.Item><Nav.Link eventKey="grey" onSelect={this.onSelectFilterColour}>grey</Nav.Link></Nav.Item></li>
                    <li><Nav.Item><Nav.Link eventKey="blue" onSelect={this.onSelectFilterColour}>blue</Nav.Link></Nav.Item></li>
                </ul>
                <ul>
                <li>Sort:</li>
                    <li><Nav.Item><Nav.Link eventKey="all" onSelect={this.onSelectSort}>All</Nav.Link></Nav.Item></li>
                    <li><Nav.Item><Nav.Link eventKey="lowestToHighest" onSelect={this.onSelectSort}>Lowest to Highest</Nav.Link></Nav.Item></li>
                    <li><Nav.Item><Nav.Link eventKey="highestToLowest" onSelect={this.onSelectSort}>Highest to Lowest</Nav.Link></Nav.Item></li>
                </ul>
                </div>

                <div class="itemList">
                <DisplayList list={this.props.list.filter(this.matchesFilterSize).filter(this.matchesFilterColour).sort(this.matchesSort)} onAggregatorAdd={this.onAggregatorAdd} onAggregatorRemove={this.onAggregatorRemove}/> 
                </div>
                <div class="aggregator">  
                <h2>Shopping Cart:</h2>      
                <h2>Total Price = ${Math.abs(this.state.totalprice.toFixed(2))}</h2>
                <DisplayList list={this.state.cartlist} onAggregatorAdd={this.onAggregatorAdd} onAggregatorRemove={this.onAggregatorRemove} ></DisplayList>
                </div>
            </div>

        )
    }
}

export default FilteredList;

