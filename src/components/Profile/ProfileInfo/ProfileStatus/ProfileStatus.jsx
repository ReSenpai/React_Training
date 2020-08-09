import React from 'react';
import styles from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        });
    }


    render () {
        return (
            <div>
                { !this.state.editMode &&
                    <div>
                        <span 
                            onDoubleClick={ this.activateEditMode }>
                            { this.state.status || 'Поделитесь своими мыслями :3' }
                        </span>
                    </div>
                }
                { this.state.editMode &&
                    <div>
                        <input 
                            type="text" 
                            value={ this.state.status || '' }
                            onBlur={ this.deactivateEditMode }
                            autoFocus={ true }
                            placeholder='Status'
                            onChange={ this.onStatusChange }
                             />
                    </div>
                }
            </div>
        )
    }    
}

export default ProfileStatus;