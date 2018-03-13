import React from 'react'
import { connect } from 'react-redux'
import BoxRight from './box_right'
import ElevationGraph from './elevation'
import MainHeader from '../main_header'
import Map from './map'
import { fetchActivity } from '../../actions/activity_actions'
import { Link } from 'react-router-dom'

class ActivityShow extends React.Component {

  componentDidMount() {
    this.props.fetchActivity(this.props.match.params.activityId)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {

    const activity = this.props.activity
    if(!activity) return null;

    return (
      <div >
        <MainHeader />
        <div className="map-show-body">
          <div className="index-link">
            <Link to="/">My Routes </Link>
            <a>&nbsp;/&nbsp;{activity.title}</a>
          </div>

          <h1 className="ac-title"><img src={activity.type_of === 'Ride' ?
            "https://image.flaticon.com/icons/png/128/130/130276.png" :
            "https://upload.wikimedia.org/wikipedia/commons/1/14/Running_shoe_icon.png"}
            />{activity.title}</h1>
          <div className="map-row">
            <div className="map-graph-container">
              <Map polyline={activity.polyline}/>
              <ElevationGraph polyline={activity.polyline}/>
            </div>
            <BoxRight />
          </div>
        </div>
      </div>
    )
  }
}

const msp = state => ({
  currentUser: state.session.currentUser,
  activity: state.activities.current
})

const mdp = dispatch => ({
  fetchActivity: id => dispatch(fetchActivity(id))
})

export default connect(msp, mdp)(ActivityShow)
// /athlete/:athlete_id/routes
