import { connect } from 'react-redux';
import WebSeriesList from '../components/WebSeriesList';

const mapState = (state) => {
  const { lists, isFetching } = state.lists;
  return {
    lists,
    isFetching,
  }
}
export default connect(mapState)(WebSeriesList);
