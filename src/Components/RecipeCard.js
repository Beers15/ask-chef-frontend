import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import UpdateModal from './UpdateModal';
import DetailsModal from './DetailsModal';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateModal: false,
      showDetailsModal: false,
      open: false,
      summaryDisplay: 'none'
    };
  }

  toggleUpdateModal = () => {
    this.setState({ showUpdateModal: !this.state.showUpdateModal });
  };

  toggleDetailsModal = () => {
    this.setState({ showDetailsModal: !this.state.showDetailsModal });
  };

  getConfig = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    return config;
  };

  onDeleteClick = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/recipes/${this.props.recipe._id}`);
      this.props.updatePage();
    } catch (err) {
      console.log(err);
    }
  };

  onAddClick = async () => {
    let config = await this.getConfig();

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/recipes`, this.props.recipe, config);
      alert('Recipe Saved! Happy Cooking!');
    } catch (err) {
      console.log(err);
    }
  };

  onUpdateClick = async (recipeToUpdate) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/recipes/${recipeToUpdate._id}`,
        recipeToUpdate
      );
      console.log(response.data);
      this.props.updatePage();
      this.toggleModal();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div id="recipe-card-container">
        <Card id="recipe-card" className="m-2" style={{ width: '24rem', maxWidth: '24rem' }}>
          <Card.Title id="recipe-card-title">{this.props.recipe.title}</Card.Title>
          <Card.Img variant="top" src={this.props.recipe.image} />
          <Card.Body>
            <Button variant="secondary" onClick={() => this.setState({open: !this.state.open})} aria-controls="example-fade-text" aria-expanded={this.state.open}>
              View Summary
            </Button>
            <Button onClick={this.toggleDetailsModal} className="m-2" variant="secondary">
              View Recipe Details
            </Button>
          </Card.Body>
          {this.props.isProfileCard ? (
            <Card.Body id="recipe-card-body">
              <Button onClick={this.toggleUpdateModal} className="m-2" variant="success">
                Update
              </Button>
              <Button onClick={this.onDeleteClick} variant="danger">
                Delete
              </Button>
            </Card.Body>
          ) : (
            <Card.Body id="recipe-card-body">
              <Button onClick={this.onAddClick} className="m-2" variant="success">
                Save
              </Button>
            </Card.Body>
          )}
        </Card>
        <Fade
          in={this.state.open}
          onEnter={() => this.setState({ summaryDisplay: 'block' })}
          onExit={() => this.setState({ summaryDisplay: 'none' })}
        >
          <div style={{ display: this.state.summaryDisplay}} className="summary-txt" dangerouslySetInnerHTML={{__html: this.props.recipe.summary}}></div>
        </Fade>
        <UpdateModal
          onUpdateClick={this.onUpdateClick}
          showModal={this.state.showUpdateModal}
          toggleModal={this.toggleUpdateModal}
          recipe={this.props.recipe}
        />
        <DetailsModal
          showModal={this.state.showDetailsModal}
          toggleModal={this.toggleDetailsModal}
          recipe={this.props.recipe}
        />
      </div>
    );
  }
}

export default withAuth0(RecipeCard);
