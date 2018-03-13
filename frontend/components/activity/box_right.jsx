import React from "react";
import { connect } from "react-redux";

const BoxRight = props => {
  if (!props.activity) return null;

  return (
    <div className="box-right-cont">
      <div className="top-row">
        <img src={props.activity.owner_img} />
        <div>
          <a className="name">By {props.activity.owner.username}</a>
          <a className="date">Created on {props.activity.date}</a>
        </div>
      </div>

      <div className="mid-row">
        <ul>
          <li>
            <div>{props.activity.distance}mi</div>
            <a>Distance</a>
          </li>
          <li>
            <div>{props.activity.elevation}ft</div>
            <a>Elevation Gain</a>
          </li>
          <li>
            <div>Road</div>
            <a>Type</a>
          </li>
        </ul>

        <div className="movingTime">
          <i class="material-icons">schedule</i>
          {props.activity.est_moving_time}
        </div>
      </div>

      <div className="bottom-row">
        <a>Share this Route with Friends</a>
        <ul>
          <li />
          <li />
          <li />
        </ul>
      </div>
    </div>
  );
};

const msp = state => ({
  currentUser: state.session.currentUser,
  activity: state.activities.current
});

export default connect(msp, null)(BoxRight);
