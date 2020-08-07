import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { 
    getUserProfile
} from '../../redux/profile_reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId);
    }

    render () {
        return (
            <Profile { ...this.props } profile={ this.props.profile } />
        )
    } 
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getUserProfile
})(withUrlDataContainerComponent);