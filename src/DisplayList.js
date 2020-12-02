// maps each product from App.js to an HTML element or Component for render
import React from 'react';
import './index.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class DisplayList extends React.Component {


render () {
    return (

      <div>
        {this.props.list.map(item => 
        <Card class="card"style={{ width: '18rem' }}>
        <Card.Img class="top" src={item.image}/>
        <Card.Body>
          <Card.Title>
            <h3>{item.name}</h3></Card.Title>
            <Card.Subtitle>${item.price.toFixed(2)}</Card.Subtitle>
          <Card.Text>
             {item.size}, {item.colour}
          </Card.Text>
          <Button onClick={() => this.props.onAggregatorAdd(item)}>Add to Cart</Button>
          <Button onClick={() => this.props.onAggregatorRemove(item)}>Remove from Cart</Button>

        </Card.Body>
      </Card>)}
      </div>
);
        }
    }
export default DisplayList;
