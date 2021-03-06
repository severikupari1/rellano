import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import scrollTo from "gatsby-plugin-smoothscroll"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faMapMarkerAlt, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default () => {
  const { social, footer, contacts } = useSiteMetadata()
  return (
    <footer>
      <div className="row">
        <div className="six columns info">

          <div className="footer-logo">
            <AnchorLink to="/">
              <img src={ footer.logo } alt="" />
            </AnchorLink>
          </div>

          <p className={"text-white"}>{ footer.text }</p>

        </div>

        <div className="six columns">
          <div className="row">
           <div className="columns">
             <FontAwesomeIcon icon={ faFacebook } />
             <ul>
               { social.map(mySocial =>
                 <li key={Math.random()} ><a className={"text-white"} style={{
                     color: '#d5d5d5'
                 }} href={ mySocial.url }>
                   { mySocial.service }
                 </a></li>
               )}
             </ul>
          </div>

          <div className="columns last">
            <FontAwesomeIcon icon={ faEnvelope } />
             <ul>
               { contacts.map((contact, index) =>
                 <li key={index}><a className={"text-white"} href={ contact.url }>{ contact.text }</a></li>
               )}
             </ul>
          </div>
        </div>
      </div>

      <p className="copyright text-white">&copy; 2021 Rellano | Tekijä Severi Kupari </p>

      <div id="go-top">
        <button title="Back to Top" onClick={() => scrollTo('#top')}>
          <FontAwesomeIcon icon={ faChevronUp } />
        </button>
      </div>
    </div>
  </footer>

)}
