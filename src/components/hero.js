import React from "react"
import content from "../../content/hero.yaml"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default () => (
  <section id="hero">
    <div className="row">
      <div className="twelve columns">

        <div className="hero-text">
          <h1 className="responsive-headline">{ content.headline }</h1>
          <p>{ content.body }</p>
        </div>
    
        <div className="buttons">
          <a className="button trial animated shake" href={ content.button1.to }>{ content.button1.label }
            <i className="fa ml-1"><FontAwesomeIcon icon={ faPhone } /></i>
          </a>
          <a className="button learn-more" href={ content.button2.to }>{ content.button2.label }
            <i className="fa ml-1"><FontAwesomeIcon icon={ faEnvelope } /></i>
          </a>
        </div>

        <div className="hero-image">
          <img src={ content.image } alt="" className="animated fadeInUpBig" />
        </div>
      </div>
    </div>
  </section>
)
