import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Home from "../components/Home";

import { fetchWebSeriesRequested } from "../actions/webSeries";

const mapState = (state) => ({
  isFetching: state.lists.isFetching,
  isFetched: state.lists.isFetched,
});

const mapStateToDispatch = dispatch =>
  bindActionCreators(
    {
      fetchWebSeriesRequested
    },
    dispatch
  );

export default connect(
  mapState,
  mapStateToDispatch
)(Home);
