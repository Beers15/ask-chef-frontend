import { Component } from 'react';
import LandingCarousel from './LandingCarousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MissionStatement from './MissionStatement';
import axios from 'axios';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingRecipes: [],
    };
  }

  componentDidMount = async () => {
    try {
      const results = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_KEY}&number=9`
      );
      const landingRecipes = results.data.recipes;
      this.setState({ landingRecipes });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container id="landing-container">
        <Row>
          <Card id="landing-card">
            <Card.Body>
              <LandingCarousel landingRecipes={this.state.landingRecipes} />
            </Card.Body>
          </Card>
          <MissionStatement />
        </Row>
      </Container>
    );
  }
}
