import React from "react";
import WebSeriesList from "../containers/WebSeriesList";

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.fetchWebSeriesRequested();
  }

  render() {
    const { isFetching, isFetched } = this.props;

    return (
      <div>
        { isFetching && <div>Data is loading</div>}
        { isFetched && <WebSeriesList />}
      </div>
    )
  }
}

export default Home;
