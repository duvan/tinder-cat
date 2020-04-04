import React, { useContext } from 'react'
import { Interest } from './components/Interests'
import { MsgContext } from '../../../contexts/MsgContext';
import {  AboutContext } from '../../../contexts/AboutContext';


const showAboutPanel = {
    display: 'block'
}
const hideAboutPanel = {
    display: 'none'
}


export const AboutCat = () => {

    const message = useContext(MsgContext)
    const {aboutPanel} = useContext(AboutContext)

    return (
    <div style = {aboutPanel ? showAboutPanel : hideAboutPanel} className="about-cat">
        
        { message }
        <Interest />
    </div>
    )

}