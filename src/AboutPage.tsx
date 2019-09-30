import React, { PropsWithChildren } from 'react';

import Gallery, { GalleryView } from './Gallery';
import Column from './Column';

import './AboutPage.css';

import ourAimsBanner from './assets/banners/our_aims_banner.png';

import community from './assets/photos/community.jpg';
import exchange from './assets/photos/exchange.jpg';
import awareness from './assets/photos/awareness.jpg';
import party from './assets/photos/party.jpg';

enum AimAlign {
  Left,
  Right,
}

type AimDescriptor = {
  image: string,
  align: AimAlign,
  imageStyle?: React.CSSProperties,
};

const Aim: React.SFC<PropsWithChildren<AimDescriptor>> = (props) => {
  return (
    <div className={props.align === AimAlign.Left ? "Aim-left" : "Aim-right"}>
      <div className="Aim-content">
        {props.children}
      </div>
      <div className="Aim-image">
        <img src={props.image} style={props.imageStyle} />
      </div>
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <>
      <Gallery>
        <GalleryView image={ourAimsBanner}>
          <h1>Our Aims</h1> 
        </GalleryView>
      </Gallery>
      <Column>
        <Aim image={community} align={AimAlign.Right}>
          <h1>Community</h1>
          <p>AJS (Anglo-Japanese Society) aims to act to create a friendly community of Japanese and non-Japanese people interested in Japanese culture or language in Cambridge.</p>
          <p>From our social events at the pub meetings, dinners and clubbing events, to Japanese cultural events such as sushi parties, film nights, language lessons and karaoke!</p>
        </Aim>
        <Aim image={awareness} align={AimAlign.Left}>
          <h1>Cultural Awareness</h1>
          <p>As well as creating a community of like-minded people who can enjoy the aforementioned events, AJS aims to promote awareness and appreciation of Japanese culture to people who may have not heard of many of our customs. </p>
        </Aim>
        <Aim image={exchange} align={AimAlign.Right}>
          <h1>Language Exchange</h1>
          <p>We also hold conversational exchanges with visiting Japanese students. We hope to foster an environment where people of all different levels of ability can practice their Japanese/English and leave feeling more confident and relaxed in their linguistic ability.</p>
        </Aim>
        <Aim image={party} align={AimAlign.Left}>
          <h1>Party!</h1>
          <p>As well as all our events in term we hold an annual New Year's Party (involving Japanese food and umeshu!) and an end-of-term Garden Party in the summer. We hope you can join us in celebrating how life can be enriched through understanding and sharing culture! </p>
        </Aim>
      </Column>
    </>
  );
};

export default AboutPage;
