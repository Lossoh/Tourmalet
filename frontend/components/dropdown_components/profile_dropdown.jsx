import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";

class ProfileDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.mouseEventHandler = this.mouseEventHandler.bind(this);
  }

  mouseEventHandler(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    const items =
      this.state.open === true ? (
        <ul>
          <li>
            <Link to="/">Edit Profile</Link>
          </li>
          <li>
            <button onClick={this.props.logout}>Log Out</button>
          </li>
        </ul>
      ) : null;

    return (
      <div
        className="dropdown-div"
        onMouseEnter={this.mouseEventHandler}
        onMouseLeave={this.mouseEventHandler}
      >
        <img className="profile" src={currentUser.avatar_url} />
        <i className="material-icons">keyboard_arrow_down</i>
        {items}
      </div>
    );
  }
}

const msp = state => ({
  currentUser: state.session.currentUser
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(ProfileDropdown);
