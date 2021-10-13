import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class QuestionsSearchCard extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const results = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/recipes/complex-search?cuisine=${e.target.cuisine.value}&diet=${e.target.diet.value}&intolerences=${e.target.intolerences.value}&equipment=${e.target.equipment.value}&type=${e.target.type.value}`
      );
      if(results.data && results.data.length === 0) {
        this.props.triggerFlash('The chef is stumped! No recipes were found for the given input.', 'danger');
      }
      this.props.setRecipes(results.data);
    } catch (err) {
      console.log(err);
    }
    if(this.props.recipes.length === 0) {
      this.props.setRecipes([]);
    }
  };

  render() {
    return (
      <div>
        <Card border="dark" id="askchef-card">
          <Card.Header className="card-header" style={{ fontSize: '2rem' }}>
            Search By Questions
          </Card.Header>
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title className="mb-4" style={{ fontSize: '1.4rem' }} id="askchef-title">
              Unsure what to eat? Let the Chef help you decide!
            </Card.Title>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label style={{ float: 'left', fontSize: '1.3rem' }}>What meal type are you looking for?</Form.Label>
                <Form.Select className="mb-3" aria-label="cuisine select" name="type">
                  <option value="none">Select an option</option>
                  <option value="snack">snack</option>
                  <option value="drink">drink</option>
                  <option value="main course">main course</option>
                  <option value="appetizer">appetizer</option>
                  <option value="side dish">side dish</option>
                  <option value="dessert">dessert</option>
                  <option value="salad">salad</option>
                  <option value="bread">bread</option>
                  <option value="breakfast">breakfast</option>
                  <option value="soup">soup</option>
                  <option value="beverage">beverage</option>
                  <option value="sauce">sauce</option>
                  <option value="marinade">marinade</option>
                  <option value="fingerfood">fingerfood</option>
                </Form.Select>

                <Form.Label style={{ float: 'left', fontSize: '1.3rem' }}>What kind of Cuisine would you like?</Form.Label>
                <Form.Select className="mb-3" aria-label="cuisine select" name="cuisine">
                  <option value="none">Select an option</option>
                  <option value="African">African</option>
                  <option value="American">American</option>
                  <option value="British">British</option>
                  <option value="Cajun">Cajun</option>
                  <option value="Caribbean">Caribbean</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Eastern European">Eastern European</option>
                  <option value="European">European</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Greek">Greek</option>
                  <option value="Indian">Indian</option>
                  <option value="Irish">Irish</option>
                  <option value="Italian">Italian</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Jewish">Jewish</option>
                  <option value="Korean">Korean</option>
                  <option value="Latin American">Latin American</option>
                  <option value="Mediterranean">Mediterranean</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Middle Eastern">Middle Eastern</option>
                  <option value="Nordic">Nordic</option>
                  <option value="Southern">Southern</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Thai">Thai</option>
                  <option value="Vietnamese">Vietnamese</option>
                </Form.Select>

                <Form.Label style={{ float: 'left', fontSize: '1.3rem' }}>What type of diet are you following?</Form.Label>
                <Form.Select className="mb-3" aria-label="cuisine select" name="diet">
                  <option value="none">Select an option</option>
                  <option value="none">none</option>
                  <option value="Gluten Free">Gluten Free</option>
                  <option value="Ketogenic">Ketogenic</option>
                  <option value="Vegitarian">Vegetarian</option>
                  <option value="Caribbean">Lacto-Vegetarian</option>
                  <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Pescetarian">Pescetarian</option>
                  <option value="Paleo">Paleo</option>
                  <option value="Primal">Primal</option>
                  <option value="Low FODMAP">Low FODMAP</option>
                  <option value="Whole30">Whole30</option>
                </Form.Select>

                <Form.Label style={{ float: 'left', fontSize: '1.3rem' }}>Do you have any dietary restrictions</Form.Label>
                <Form.Select className="mb-3" aria-label="cuisine select" name="intolerences">
                  <option value="none">Select an option</option>
                  <option value={null}>none</option>
                  <option value="Gluten Free">Gluten Free</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Egg">Egg</option>
                  <option value="Gluten">Gluten</option>
                  <option value="Grain">Grain</option>
                  <option value="Peanut">Peanut</option>
                  <option value="Seafood">Seafood</option>
                  <option value="Sesame">Sesame</option>
                  <option value="Shellfish">Shellfish</option>
                  <option value="Soy">Soy</option>
                  <option value="Sulfite">Sulfite</option>
                  <option value="Tree Nut">Tree Nut</option>
                  <option value="Wheat">Wheat</option>
                </Form.Select>
              </Form.Group>

              <Form.Label style={{ float: 'left', fontSize: '1.3rem' }}>Is there any cookware that you want to use?</Form.Label>
              <Form.Control className="mb-3" name="equipment" type="text" placeholder="Enter equipment, seperated by a comma" />

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

export default QuestionsSearchCard;
