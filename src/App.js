import React, { Component } from "react";
import CatList from "./CatList";
import { connect } from "react-redux";
import { fetchCats } from "./actions/catActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>CatBook</h1>
        {/* add CatList component here */}
        <CatList catPics={this.props.catPics} loading={this.props.loading} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  catPics: state.cats,
  loading: state.loading,
});

const mapDispatchToProps = {
  //  same as below sintax when no params are given
  fetchCats,
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCats: () => dispatch(fetchCats()),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
