import React, { Component } from 'react';
import { css } from "@emotion/core";
import { PropagateLoader } from "react-spinners";


const override = css`
position: absolute;
top: 30vh;
left: 50%;
transform: translateX(-50%) translateY(-50%);
`;

class Spinner extends Component {
  render() {
    return (
        <div className="sweet-loading">
            <PropagateLoader
            css={override}
            size={15}
            //size={"150px"} this also works
            color={"#000000"}
            />
        </div>
    );
  }
}

export default Spinner;
