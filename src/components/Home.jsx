import React from "react";
import WebSeriesList from "../containers/WebSeriesList";
import { Loading } from "./Loading";
import ListSearch from "../containers/ListSearch";
import SearchResultNotFound from "../containers/SearchResultNotFound";

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.fetchWebSeriesRequested();
  }

  render() {
    const {
      isFetching,
      isFetched,
      lists,
    } = this.props;

    return (
      <div className="home-container">
        { isFetching && <Loading /> }
        { !isFetching && <ListSearch /> }
        { isFetched && lists.length > 0 && <WebSeriesList /> }
        { isFetched && <SearchResultNotFound /> }
      </div>
    )
  }
}

export default Home;
