import React, { Component } from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import IngredientSearchCard from './IngredientSearchCard';
import Card from 'react-bootstrap/Card';
import background from '../img/search-tab-background_calum-lewis-vA1L1jRTM70-unsplash.jpg';

class SearchTabs extends Component {
  render() {
    return (
      <div>
        <Card id="search-tab-container">
          <Card.Img id="search-form-background" src={background} alt="form background" />
          <Card.ImgOverlay>
            <Tabs align="center">
              <div id="search-tabs">
                <TabLink activeClassName="search-tab-active" className="search-tab" to="tab1">Ingredients</TabLink>
                <TabLink activeClassName="search-tab-active" className="search-tab" to="tab2">Chef's questions</TabLink>
                <TabLink activeClassName="search-tab-active" className="search-tab" to="tab3">Nutrition</TabLink>
              </div>
              <TabContent for="tab1">
                <IngredientSearchCard setRecipes={this.props.setRecipes} recipes={this.props.recipes} />
              </TabContent>
              <TabContent for="tab2">
                Generic question form here
              </TabContent>
              <TabContent for="tab3">
                Nutrition form here
              </TabContent>
            </Tabs>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default SearchTabs;
