import React from 'react';
import styles from './SocialMedia.module.css';
import facebook from '../../../assets/icons/facebook.svg';
import website from '../../../assets/icons/web-site.svg';
import { ReactComponent as Vkontakte  } from '../../../assets/icons/vk.svg';


const SocialMedia = ({contacts}) => {

    return (
        <div className={ styles.wrapper }>
            { Object.keys(contacts).map(key => {
                return contacts[key] &&  <a key={ key } href={ contacts[key] }>{ key }</a>
            }) }
        </div>
    )
}

export default SocialMedia;