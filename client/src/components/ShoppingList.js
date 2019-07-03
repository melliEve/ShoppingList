import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: 'milk' },
      { id: uuid(), name: 'coffee' },
      { id: uuid(), name: 'cheese' },
      { id: uuid(), name: 'tea' }
    ]
  }

  render() {
    const { items } = this.state
    
    return(
      <Container>
        <Button color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('enter item');
            if(name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
              }));
            }
          }}
        >Add Item
        </Button>
        <ListGroup>
           <TransitionGroup className='shopping-list'>
          {items.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
          </TransitionGroup> 
        </ListGroup>
      </Container>
    )
  }
}

export default ShoppingList;