// HomePage.jsx
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Components/Product";
import { productData, responsive } from "./Components/data";
import Middle from "./Components/Middle";
import { middleData } from "./Components/data_middle";
import End from "./Components/End";
import { endData } from "./Components/data_end";
import BottomNavigation from "./Components/BottomNavigation";
import NavigationBar from "./Components/NavigationBar";
import "./App.css";
import { BrowserRouter } from 'react-router-dom';

function HomePage() {
  return (
   
    <div className="App">
      <NavigationBar />
      <Carousel showDots={true} responsive={responsive}>
        {productData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Carousel>
      <Carousel showDots={false} responsive={responsive}>
        {middleData.map((middle) => (
          <Middle key={middle.id} middle={middle} />
        ))}
      </Carousel>
      <Carousel showDots={false} responsive={responsive}>
        {endData.map((end) => (
          <End key={end.id} end={end} />
        ))}
      </Carousel>
      <BottomNavigation>
      </BottomNavigation>
    </div>
  
    
  );
}

export default HomePage;