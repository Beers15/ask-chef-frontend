import React, { Component } from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import IngredientSearchCard from './IngredientSearchCard';
import QuestionsSearchCard from './QuestionsSearchCard';
import Card from 'react-bootstrap/Card';
import background from '../../img/search-tab-background_calum-lewis-vA1L1jRTM70-unsplash.jpg';

class SearchTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {height: 500};
  }
  render() {
    return (
      <div>
        <Card id="search-tab-container">
          <Card.Img id="search-form-background" src={background} alt="form background" style={{height: `${this.state.height}px`}} />
          <Card.ImgOverlay>
            <Tabs align="center">
              <div id="search-tabs">
                <TabLink onClick={() => this.setState({height: 480})} activeClassName="search-tab-active" className="search-tab" to="tab1">Ingredients</TabLink>
                <TabLink onClick={() => this.setState({height: 860})} activeClassName="search-tab-active" className="search-tab" to="tab2">Chef's questions</TabLink>
                <TabLink onClick={() => this.setState({height: 480})} activeClassName="search-tab-active" className="search-tab" to="tab3">Nutrition</TabLink>
              </div>
              <TabContent for="tab1">
                <IngredientSearchCard setRecipes={this.props.setRecipes} recipes={this.props.recipes} />
              </TabContent>
              <TabContent for="tab2">
                <QuestionsSearchCard setRecipes={this.props.setRecipes} recipes={this.props.recipes} />
              </TabContent>
              <TabContent for="tab3">
                <h2 style={{backgroundColor: 'grey',color: 'white'}}>Nutrition Search is Coming Soon!</h2>
              </TabContent>
            </Tabs>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default SearchTabs;
