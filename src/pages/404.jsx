import React, { Component } from "react";
import Helmet from "react-helmet";
import NotFound from "../components/NotFound/NotFound";
import config from "../../data/SiteConfig";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="not-found-container">
        <Helmet title={`404 Not Found | ${config.siteTitle}`} />
        <NotFound />
      </div>
    );
  }
}

export default NotFoundPage;
