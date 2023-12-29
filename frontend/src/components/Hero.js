/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './Hero.css'
import restfood from '../imgs/restauranfood.jpg'
export default function Hero() {
  return (
    <section className="hero">

        <div className="column">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              alpha gama xray diox asd asdfase asdlifjweoi khohe kjoiea
              alsidf la oewyw eoej lliasf a aoid sao asoid fwo asdoi{" "}
            </p>
            <button>Reserve a table</button>
        </div>

        <div className="column-2">
          <img
            src={restfood}
            className="img"
            alt="restaurant food image"
          />
        </div>
      
  </section>
  )
}
