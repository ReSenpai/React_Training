import React from 'react';
import style from './SocialMedia.module.css';
import facebook from '../../../assets/icons/facebook.svg';
import website from '../../../assets/icons/web-site.svg';
import { ReactComponent as Vkontakte  } from '../../../assets/icons/vk.svg';


const SocialMedia = (props) => {
    return (
        <div>
            <img src={ facebook } alt="Facebook logo"/>
            <img src={ website } alt="Website logo"/>
        </div>
    )
}

export default SocialMedia;