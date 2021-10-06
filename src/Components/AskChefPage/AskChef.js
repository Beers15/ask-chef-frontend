import React, { Component } from 'react';
import RecipeCard from '../RecipeCard';
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
        <div className="result-card-container">
          {this.state.recipes.length > 0 && (
            <>
              {this.state.recipes.map((recipe) => {
                return (
                  <RecipeCard
                    isProfileCardRow={false}
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

export default withAuth0(AskChef);
