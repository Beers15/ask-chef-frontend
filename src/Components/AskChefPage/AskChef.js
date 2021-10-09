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
      <div id="ask-chef-container">
        <div className={this.state.recipes.length > 0 ? 'content-flex-container' : ''}>
          <SearchTabs className="col-md-3" setRecipes={this.setRecipes} recipes={this.state.recipes} />
          <div className={this.state.recipes.length > 0 ? 'results-flex-container' : ''}>
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
      </div>
    );
  }
}

export default withAuth0(AskChef);
