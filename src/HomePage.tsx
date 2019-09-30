import React from 'react';

import Gallery, { GalleryView } from './Gallery';
import Column from './Column';

import './HomePage.css';

import homepageBanner1 from './assets/banners/homepage_banner_1.jpg';

import community from './assets/photos/community.jpg';
import exchange from './assets/photos/exchange.jpg';
import awareness from './assets/photos/awareness.jpg';

const HomePage: React.FC = () => {
  return (
    <>
      <Gallery>
        <GalleryView image={homepageBanner1}>
          <h1>Cambridge University Anglo-Japanese Society</h1>
          <p>A friendly interface between Japanese and non-Japanese in Cambridge</p>
        </GalleryView>
      </Gallery>
      <div className="HomePage-highlights">
        <Highlight image={community} highlight="Events Fortnightly" />
        <Highlight image={exchange} highlight="Over 100 Active Members" />
        <Highlight image={awareness} highlight="Cultural and Linguistic Exchange" />
      </div>
      <Column />
    </>
  );
};

type HighlightDescriptor = {
  image: string,
  highlight: string,
};

const Highlight: React.SFC<HighlightDescriptor> = (descriptor) => {
  return (
    <div className="Highlight">
      <div style={{
        "--highlight-image": `url(${descriptor.image}`,
      } as React.CSSProperties} className="Highlight-background" />
      <h1 className="Highlight-text">{descriptor.highlight}</h1>
    </div>
  );
};

export default HomePage;
