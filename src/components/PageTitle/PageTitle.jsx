import React from "react";
import "./PageTitle.css";

class PageTitle extends React.Component {
  render() {
    const { text, image, url } = this.props;
    if (image) {
      return (<h1 className={'page-title'}>
        <a href={url}>
          <img src={image} alt={text} />
        </a>
      </h1>);
    } else if (text) {
      return <h1 className={'page-title'} >{text}</h1>;
    }
    return null;
  }
}

export default PageTitle;
