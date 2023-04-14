import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";
export class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderPostsList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  // renderUsersList() {
  //   return this.props.users.map((user) => {
  //     return (
  //       <div className="item" key={user.id}>
  //         <h2>{user.name}</h2>
  //       </div>
  //     );
  //   });
  // }
  render() {
    return (
      <div>
        <div className="ui relaxed divided list">{this.renderPostsList()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
