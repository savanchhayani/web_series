import React from "react";
import WebSeriesList from "../containers/WebSeriesList";
import { Loading } from "./Loading";

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.fetchWebSeriesRequested();
  }

  render() {
    const { isFetching, isFetched } = this.props;

    return (
      <div>
        { isFetching && <Loading />}
        { isFetched && <WebSeriesList />}
      </div>
    )
  }
}

export default Home;
