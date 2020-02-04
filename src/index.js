import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeftArrow from './assets/LeftArrow';
import RightArrow from './assets/RightArrow';
import './style.scss';

class Carousel extends Component {
  figureRef = React.createRef();
  childRef = [];
  state = {
    currImage: 0,
    theta: 0,
    width: 0
  };

  componentDidMount() {
    const children = this.props.children;
    const width = parseFloat(getComputedStyle(this.childRef[0]).width);
    this.setState({ width });

    this.setupCarousel(children.length, width);
    window.addEventListener('resize', () => {
      this.setupCarousel(children.length, width);
    });
  }
  componentWillUnmount() {
    const children = this.props.children;
    window.removeEventListener(
      'resize',
      this.setupCarousel(children.length, this.state.width)
    );
  }

  setupCarousel = (n, childWidth) => {
    const children = this.childRef;
    const apothem = childWidth / (2 * Math.tan(Math.PI / n));
    const theta = (2 * Math.PI) / n;

    this.setState({ theta });

    this.figureRef.current.style.transformOrigin = `50% 50% ${-apothem}px`;
    this.figureRef.current.style.width = `${childWidth}px`;
    children[0].style.transform = `rotateY(0rad)`;

    for (let i = 0; i < n; i++) {
      // children[i].style.padding = `${gap}px`;
      children[i].style.width = `${childWidth}px`;
    }
    for (let i = 1; i < n; i++) {
      children[i].style.width = `${childWidth}px`;
      children[i].style.transformOrigin = `50% 50% ${-apothem}px`;
      children[i].style.transform = `rotateY(${i * theta}rad)`;
    }
    if (this.props.bfc)
      for (i = 0; i < n; i++) children[i].style.backfaceVisibility = 'hidden';

    this.rotateCarousel(this.state.currImage);
  };

  rotateCarousel = imageIndex => {
    this.figureRef.current.style.transform = `rotateY(${imageIndex *
      -this.state.theta}rad)`;
  };

  handleScroll = position => {
    if (position === 'left') {
      this.setState(prevState => ({
        currImage: prevState.currImage - 1
      }));
    } else {
      this.setState(prevState => ({
        currImage: prevState.currImage + 1
      }));
    }
    this.rotateCarousel(this.state.currImage);
  };

  render() {
    const arrowClass = this.props.arrowClass;
    return (
      <div className='react_3d_carousel'>
        <button
          className={`sc_btn left flex-row ${arrowClass}`}
          onClick={e => this.handleScroll('left')}
        >
          <LeftArrow />
        </button>
        <figure ref={this.figureRef}>
          {this.props.children.map((child, index) => (
            <div
              key={`react_carousel_${index}`}
              className='rc_child'
              ref={ref => {
                this.childRef[index] = ref;
                return true;
              }}
            >
              {child}
            </div>
          ))}
        </figure>
        <button
          className={`sc_btn right flex-row ${arrowClass}`}
          onClick={e => this.handleScroll('right')}
        >
          <RightArrow />
        </button>
      </div>
    );
  }
}

Carousel.propTypes = {
  bfc: PropTypes.bool,
  children: PropTypes.element.isRequired,
  arrowClass: PropTypes.string
};

Carousel.defaultProps = {
  bfc: false,
  arrowClass: ''
};

export default Carousel;
