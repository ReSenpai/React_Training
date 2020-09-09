import React, { ChangeEvent } from 'react';
import { ReactComponent as MeditationIcon } from '../../../../assets/icons/self_improvement.svg' 
import styles from './ProfileStatus.module.css';

type PropsType = {
    status: string
    updateUserStatus: (newStatus: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({ editMode: true });
    }

    deactivateEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ status: event.currentTarget.value });
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status })
        }
    }

    render() {
        return (
            <div className={ styles.profileStatusContainer }>
                <b>Status: </b> 
                <MeditationIcon />
                { !this.state.editMode &&
                    <div className={ styles.SpanWrapper}>
                        <span
                            onDoubleClick={ this.activateEditMode }>
                            { this.props.status || 'Поделитесь своими мыслями :3' } 
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
        ); 
    }  
}

export default ProfileStatus;