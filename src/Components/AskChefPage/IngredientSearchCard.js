import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class IngredientSearchCard extends Component {
  handleSubmit = async (e) => {
    console.log(e.target.ingredient.value);
    e.preventDefault();

    try {
      const results = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/recipes?ingredients=${e.target.ingredient.value}`
      );
      this.props.setRecipes(results.data);
      console.log(results.data[0]);
    } catch (err) {
      console.log(err);
    }
    if(this.props.recipes.length === 0) {
      this.props.setRecipes([]);
      alert('No results found found the entered ingredients!');
    }
  };

  render() {
    return (
      <div>
        <Card border="dark" id="askchef-card">
          <Card.Header id="askchef-header" >
            Search by Ingredients
          </Card.Header>
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title className="mb-4" style={{ fontSize: '1.7rem' }} id="askchef-title">
              Let the chef know what ingredients you have
            </Card.Title>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label style={{ float: 'left', fontSize: '1.3rem' }}>Ingredients</Form.Label>
                <Form.Control name="ingredient" type="text" placeholder="Enter Ingredients, seperated by a comma" />
              </Form.Group>
              <Button variant="success" style={{ float: 'left' }} type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
          <Card.Footer className="card-footer"></Card.Footer>
        </Card>
      </div>
    );
  }
}

export default IngredientSearchCard;
