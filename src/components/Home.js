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
    const { isFetching, isFetched } = this.props;

    return (
      <div>
        { isFetching && <Loading />}
        <ListSearch />
        { isFetched && <WebSeriesList />}
        { isFetched && <SearchResultNotFound />}
      </div>
    )
  }
}

export default Home;
