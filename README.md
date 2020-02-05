# React 3d carousel

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

Simple Dropdown component for React, inspired by [Giulio Mainardi](https://www.sitepoint.com/building-3d-rotating-carousel-css-javascript/)
Demo is available [here](http://)

### Installation

```
// with npm
$ npm install react-3d-carousel-container  --save

// with yarn
$ yarn add react-3d-carousel-container
```

### Usage

This is the basic usage of carousel
The Carousel supports your own elements, in their own containers,
Just add the style and pass as so
The components or Html tags should have equal width, for expected behaviour,
Add your padding on the components too.

```Javascript
import Carousel from 'react-3d-carousel-container';
<Carousel bfc={false} >
  <div style={{ width: '500px', padding: '30px' }}>
    <img
      className='img'
      src='https://source.unsplash.com/nvzvOPQW0gc/800x533'
      alt=''
    />
  </div>
  <div style={{ width: '500px', padding: '30px' }}>
    <img
      className='img'
      src='https://source.unsplash.com/7mUXaBBrhoA/800x533'
      alt=''
    />
  </div>
  <div style={{ width: '500px', padding: '30px' }}>
    <img
      className='img'
      src='https://source.unsplash.com/7mUXaBBrhoA/800x533'
      alt=''
    />
  </div>
</Carousel>

```

### props

| Props      | description                                                    | default |
| ---------- | -------------------------------------------------------------- | ------- |
| bfc        | if true determines if you the elements at the back are visible | false   |
| arrowClass | class passed to the arrows to style them                       | ""      |

### Customizing the dropdown

**Run example**

```
$ npm start
```

### License

MIT
