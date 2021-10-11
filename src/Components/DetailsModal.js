import { Component } from 'react';
import { Modal, CardGroup, Card, Accordion } from 'react-bootstrap';

class DetailsModal extends Component {
  componentDidMount() {
    console.log(this.props.recipe);
  }
  render() {
    return (
      <Modal size="xl" show={this.props.showModal}>
        <Modal.Body>
          <Modal.Header className="modal-header" onClick={this.props.toggleModal} closeButton><span style={{ fontSize: '2rem' }}>{this.props.recipe.title}</span></Modal.Header>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={this.props.recipe.image} />
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Recipe Details</Card.Title>
                <Accordion className="accordion-flush">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Recipe Steps</Accordion.Header>
                    <Accordion.Body>
                      <b>To make {this.props.recipe.title}, do the following:</b>
                      {this.props.recipe.steps && this.props.recipe.steps.length > 0 ? (
                        <ol className="m-2">
                          {this.props.recipe.steps.map((step, idx) => <li key={idx}>{step}</li>)}
                        </ol>
                      ) : (
                        <p>There are no steps avaiable for the given recipe.</p>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Needed Cookware</Accordion.Header>
                    <Accordion.Body>
                      <b>You'll need this equipment</b>
                      {this.props.recipe.equipment && this.props.recipe.equipment.length > 0 ? (
                        <ol className="m-2">
                          {[...new Set(this.props.recipe.equipment)].map((item, idx) => item !== 'none' ? <li key={idx}>{item}</li> : null)}
                        </ol>
                      ) : (
                        <p>No needed cookware found</p>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Diets</Accordion.Header>
                    <Accordion.Body>
                      <b>This recipe follows the following diets</b>
                      {this.props.recipe.diets && this.props.recipe.diets.length > 0 ? (
                        <ol className="m-2">
                          {this.props.recipe.diets.map((diet, idx) => <li key={idx}>{diet}</li>)}
                        </ol>
                      ) : (
                        <p>No diets found for this recipe</p>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Meal types</Accordion.Header>
                    <Accordion.Body>
                      <b>This recipe falls into the following categories: </b>
                      {this.props.recipe.dishTypes && this.props.recipe.dishTypes.length > 0 ? (
                        <ol className="m-2">
                          {this.props.recipe.dishTypes.map((type, idx) => <li key={idx}>{type}</li>)}
                        </ol>
                      ) : (
                        <p>No dish types found for given recipe</p>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Additional Info</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>This item has a health score of <i>{this.props.recipe.healthScore}</i>.</li>
                        <li>This recipe makes <i>{this.props.recipe.servings}</i> servings.</li>
                        <li>This recipe takes <i>{this.props.recipe.readyInMinutes}</i> minutes to make.</li>
                        <li>This item is {!this.props.recipe.veryHealthy && 'not'} considered very healthy.</li>
                        <li>This item is {!this.props.recipe.veryPopular && 'not'} considered very popular.</li>
                        <li>This item is {!this.props.recipe.cheap && 'not'} considered cheap to make.</li>
                        <li>This item is {!this.props.recipe.glutenFree && 'not'} gluten free.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </CardGroup>
        </Modal.Body>
        <Modal.Footer id="update-modal-footer">
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DetailsModal;
