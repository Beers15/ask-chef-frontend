import React, { Component } from 'react';
import ProfileCard from './ProfileCard';
import RecipeRow from './RecipeRow';
import Container from 'react-bootstrap/Container';
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

    const userRecipes = await axios.get(`${process.env.REACT_APP_BACKEND_URL2}/recipes/db`, config);
    this.setState({ recipes: userRecipes.data });
    console.log(this.state.recipes);
  };

  render() {
    return (
      <div>
        <ProfileCard />
        <Container fluid>
          {this.state.recipes.map((recipe, index) => {
            if (index % 3 === 0) {
              return (
                <RecipeRow
                  updatePage={this.updatePage}
                  isProfileCardRow={true}
                  key={index}
                  recipes={this.state.recipes.slice(index, index + 3)}
                />
              );
            } else return null;
          })}
        </Container>
      </div>
    );
  }
}
export default withAuth0(Profile);
