import React from "react";
import './Highlights.css';
import brusheta from '../imgs/bruchetta.svg'
import greeksalad from '../imgs/greek salad.jpg'
import lemondesert from '../imgs/lemon dessert.jpg'

export default function Highlights() {
  return (
      <section>
        <div className="row-1">
          <h1>This Week Specials</h1>
          <button className="div-4">Reserve a table</button>
        </div>
          <div className="row-2">
            <div className="column-1">
                <img loading="lazy"
                  src={lemondesert}
                  className="highlights-img"
                  alt="img"
                />
                <div className="div-8 item">
                  <h3 className="div-9">Lemon Desert</h3>
                  <div className="div-10">$10.00</div>
                </div>
                <div className="div-11">
                  asi aosid faiof ahsli oaisd fjoaisedfoia aois fa oiasf ja
                  osidfj o aijf oiajoiao
                  <br />
                  isafoeis afsa as ais fasi aoaioj{" "}
                </div>
                <div className="div-12">Order a delivery -&gt;</div>
            </div>
            <div className="column-2">
                <img loading="lazy"
                      src={brusheta}
                      className="highlights-img"
                      alt="img"
                    />
                    <div className="div-8">
                      <div className="div-9">Brusheta </div>
                      <div className="div-10">$11.00</div>
                    </div>
                    <div className="div-11">
                      asi aosid faiof ahsli oaisd fjoaisedfoia aois fa oiasf ja
                      osidfj o aijf oiajoiao
                      <br />
                      isafoeis afsa as ais fasi aoaioj{" "}
                    </div>
                    <div className="div-12">Order a delivery -&gt;</div>
                </div>
            <div className="column-3">
            <img loading="lazy"
                      src={greeksalad}
                      className="highlights-img"
                      alt="img"
                    />
                    <div className="div-8">
                      <div className="div-9">Greek Salad</div>
                      <div className="div-10">$12.00</div>
                    </div>
                    <div className="div-11">
                      asi aosid faiof ahsli oaisd fjoaisedfoia aois fa oiasf ja
                      osidfj o aijf oiajoiao
                      <br />
                      isafoeis afsa as ais fasi aoaioj{" "}
                    </div>
                    <div className="div-12">Order a delivery -&gt;</div>
                </div>
  
          </div>

      </section>
  );
}


