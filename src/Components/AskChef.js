import React, { Component } from 'react';
import RecipeRow from './RecipeRow';
import Container from 'react-bootstrap/Container';
import SearchTabs from './SearchTabs';
import { withAuth0 } from '@auth0/auth0-react';

class AskChef extends Component {
  constructor(props) {
    super(props);

    this.state = { recipes: [] };
  }

  setRecipes = (recipes) => {
    this.setState({recipes});
  }

  render() {
    return (
      <div>
        <SearchTabs setRecipes={this.setRecipes} recipes={this.state.recipes} />
        {this.state.recipes.length > 0 && (
          <Container>
            {this.state.recipes.map((recipe, index) => {
              if (index % 3 === 0) {
                return (
                  <RecipeRow
                    addRecipe={this.addRecipe}
                    isProfileCardRow={false}
                    key={recipe.id}
                    recipes={this.state.recipes.slice(index, index + 3)}
                  />
                );
              } else return null;
            })}
          </Container>
        )}
      </div>
    );
  }
}

export default withAuth0(AskChef);
