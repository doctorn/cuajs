import React, { PropsWithChildren } from 'react';
import './Column.css';

type ColumnProps = {
  fill?: {},
};

const Column: React.SFC<PropsWithChildren<ColumnProps>> =
  (props) => {
    let style;
    if (props.fill !== undefined) {
      style = {
        height: "100%",
      }
    } else {
      style = {};
    }
    return (
      <div className="Column" style={style}>
        <div className="Column-content" style={style}>
          {props.children}
        </div>
      </div>
    );
  };

export default Column;
