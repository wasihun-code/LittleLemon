/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import './About.css';


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
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fcdf2de25179fd60ee20199aedbbb9d8c02e8a8875866992d0889bc82c814bf8?apiKey=fd5f70311d6e4631913a50062159fe38&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fcdf2de25179fd60ee20199aedbbb9d8c02e8a8875866992d0889bc82c814bf8?apiKey=fd5f70311d6e4631913a50062159fe38&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fcdf2de25179fd60ee20199aedbbb9d8c02e8a8875866992d0889bc82c814bf8?apiKey=fd5f70311d6e4631913a50062159fe38&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fcdf2de25179fd60ee20199aedbbb9d8c02e8a8875866992d0889bc82c814bf8?apiKey=fd5f70311d6e4631913a50062159fe38&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fcdf2de25179fd60ee20199aedbbb9d8c02e8a8875866992d0889bc82c814bf8?apiKey=fd5f70311d6e4631913a50062159fe38&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fcdf2de25179fd60ee20199aedbbb9d8c02e8a8875866992d0889bc82c814bf8?apiKey=fd5f70311d6e4631913a50062159fe38&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fcdf2de25179fd60ee20199aedbbb9d8c02e8a8875866992d0889bc82c814bf8?apiKey=fd5f70311d6e4631913a50062159fe38&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fcdf2de25179fd60ee20199aedbbb9d8c02e8a8875866992d0889bc82c814bf8?apiKey=fd5f70311d6e4631913a50062159fe38&"
              className="img"
            />
          </div>
      </div>
    </>
  );
}


