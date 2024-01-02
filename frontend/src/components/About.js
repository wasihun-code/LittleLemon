/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import './About.css';
import marioandadrian from '../imgs/Mario and Adrian A.jpg'

export default function About(props) {
  return (
    <>
        <div className="about">
          <div className="column">
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
              <div className="div-5 text">
                Little Lemon is a chicago restaurant that offers great set of
                recipes accross world wide. It is known by its glamourous colors
                and artificial ingridients. It is based on chicago, USA. Come
                and visit us <br />
                anytime. I am sure you wont regret your choice.
                <br />
                wide. It is known by its glamourous colors and artificial
                ingridients. It is based on chicago, USA. Come and visit us
                anytime. I am sure you wont regret your{" "}
              </div>
          </div>
          <div className="column-2">
            <img
              loading="lazy"
              src={marioandadrian}
              className="img"
            />
          </div>
      </div>
    </>
  );
}


