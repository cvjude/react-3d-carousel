# React 3d carousel 👋

![Version](https://img.shields.io/badge/node->6.0.0-blue.svg?cacheSeconds=2592000) ![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg) ![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)

> Simple Dropdown component for React, inspired by [Giulio Mainardi](https://www.sitepoint.com/building-3d-rotating-carousel-css-javascript/)
> Demo is available [here](https://react-ed-carousel.herokuapp.com/)

### 🏠 [Homepage](https://github.com/cvjude/react-3d-carousel/tree/main)

## Prerequisites

- Node >= 6.0.0
- React >= 10.0.0

## Install

```
npm install --save-dev react-3d-carousel-container

yarn add react-3d-carousel-container
```

## Usage

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

## Author

👤 **Chinoso Jude**

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
Create a pull request and it will be reviewed and merged

## Show your support

Give a ⭐️ if this project helped you!
