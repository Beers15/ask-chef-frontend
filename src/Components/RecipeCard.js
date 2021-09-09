import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class RecipeCard extends Component {
  componentDidMount() {
    console.log(this.props.recipe, 'IN CARD');
  }

  getConfig = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: { 'Authorization': `Bearer ${jwt}` }
    };
    return config;
  }

  onClick = async () => {
    let config = await this.getConfig();

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/recipes`, this.props.recipe, config);
      alert('Recipe Saved! Happy Cooking!');
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Card id="recipe-card" className="m-2" style={{ width: '24rem' }}>
        <Card.Title id="recipe-card-title">{this.props.recipe.title}</Card.Title>
        <Card.Img variant="top" src={this.props.recipe.image} />
        <Card.Body>
          <Card.Text id="recipe-card-steps"></Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="recipe-card-list-item">
            <h3>Needed:</h3>
            <ul>
              {this.props.recipe.missedIngredients.map((missed, idx) => {
                return <li key={idx}>{missed.name}</li>;
              })}
            </ul>
          </ListGroupItem>
          <ListGroupItem className="recipe-card-list-item">
            <h3>Instructions:</h3>
            <ol>
              {this.props.recipe.steps.map((step, idx) => {
                return <li key={idx}>{step}</li>;
              })}
            </ol>
          </ListGroupItem>
        </ListGroup>
        {this.props.isProfileCard ? (
          <Card.Body id="recipe-card-body">
            <Button className="m-2" variant="success">
              Update
            </Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        ) : (
          <Card.Body id="recipe-card-body">
            {/* Add saved check */}
            <Button onClick={this.onClick} className="m-2" variant="success">
              Save
            </Button>
          </Card.Body>
        )}
      </Card>
    );
  }
}

export default withAuth0(RecipeCard);
