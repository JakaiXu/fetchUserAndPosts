import React, { Component } from "react";
import { connect } from "react-redux";

export class UserHeader extends Component {
 
  render() {
    
    const {users} = this.props;
    if (!users) {
      return null;
    }
    return <div className="header">{users.name}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return { users: state.users.find((user) => user.id === ownProps.userId) };
};
export default connect(mapStateToProps)(UserHeader);
