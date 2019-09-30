import React, { PropsWithChildren } from 'react';
import Column from './Column';
import './Gallery.css';

type GalleryViewDescriptor = {
  image: string,
};

export const GalleryView: React.SFC<PropsWithChildren<GalleryViewDescriptor>> =
  (descriptor) => {
    return (
      <div className="GalleryView" style={{
        "--gallery-image": `url(${descriptor.image})`,
      } as React.CSSProperties}>
        <div className="GalleryView-content">
          <Column>{descriptor.children}</Column>
        </div>
      </div>
    );
  };

type GalleryState = {
  index: number,
  justLoaded: boolean,
}

class Gallery extends React.Component<PropsWithChildren<{}>, GalleryState> {
  timerID!: number;
  childCount: number;
  state = {
    index: 0,
    justLoaded: true,
  };

  constructor(props: PropsWithChildren<{}>) {
    super(props);
    this.childCount = React.Children.count(props.children!);
  } 

  componentDidMount() {
    if (this.childCount > 1) {
      this.timerID = window.setInterval(
        () => this.tick(),
        5000
      );
    }
  }

  componentWillUnmount() {
    if (this.childCount > 1) {
      window.clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({
      index: (this.state.index + 1) % this.childCount,
      justLoaded: false,
    });
  }

  render() {
    return (
      <div className="Gallery">
        {React.Children.map(this.props.children!, (child, i) => {
          if (i === this.state.index) {
            return (
              <div className="Gallery-wrapper">{child}</div>
            );
          } else if ((i + 1) % this.childCount === this.state.index 
              && !this.state.justLoaded) {
            return (
              <div className="Gallery-wrapper" style={{
                animationName: "fadeOut",
                zIndex: 5,
              }}>{child}</div>
            );
          } else return;
        })}
      </div>
    );
  }
}

export default Gallery;
