import React, { Component } from "react";
import Helmet from "react-helmet";
import Favorsbot from "../components/Favorsbot/Favorsbot";
import config from "../../data/SiteConfig";

class FavorsbotPage extends Component {
  render() {
    return (
      <div className="favorsbot-container">
        <Helmet title={`Favorsbot | ${config.siteTitle}`} />
        <Favorsbot />
      </div>
    );
  }
}

export default FavorsbotPage;
