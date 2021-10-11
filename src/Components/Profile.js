import React, { Component } from 'react';
import ProfileCard from './ProfileCard';
import RecipeCard from './RecipeCard';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    };
  }

  getConfig = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    return config;
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  componentDidMount() {
    this.updatePage();
  }

  updatePage = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;

    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };

    const userRecipes = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/recipes/db`, config);
    this.setState({ recipes: userRecipes.data });
    console.log(this.state.recipes);
  };

  render() {
    return (
      <div className={this.state.recipes.length > 0 ? 'content-flex-container' : ''}>
        <ProfileCard />
        <div className={this.state.recipes.length > 0 ? 'results-flex-container' : ''}>
          {this.state.recipes.length > 0 && (
            <>
              {this.state.recipes.map((recipe) => {
                return (
                  <RecipeCard
                    updatePage={this.updatePage}
                    isProfileCard={true}
                    key={recipe.id}
                    recipe={recipe}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default withAuth0(Profile);
