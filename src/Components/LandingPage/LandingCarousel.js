import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const LandingCarousel = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  return (
    <Col className="p-0">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {props.landingRecipes.map((recipe) => {
          return (
            <div>
              <Card key={recipe.id} class="carousel-card">
                <Card.Img variant="top" src={recipe.image} alt="recipeImage" />
                <Card.ImgOverlay>
                  <Card.Title><span class="landing-carousel-text landing-carousel-title">{recipe.title}</span></Card.Title>
                  <Card.Text class="landing-carousel-text">
                    Servings: {recipe.servings}
                  </Card.Text>
                  <Card.Text class="landing-carousel-text">
                    Preparation Time: {recipe.readyInMinutes} minutes
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          );
        })}
      </Carousel>
    </Col>
  );
};

export default LandingCarousel;
