import React from "react";
import "./NewsTicker.css";
class NewsTicker extends React.Component {
  render() {
    return (
      <div className="news-ticker-container">
        <div className="news-ticker">
          <ul>
            {this.props.news.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default NewsTicker;
