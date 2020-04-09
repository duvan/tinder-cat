import React, { useContext } from 'react'
import { Interest } from './components/Interests'
import { AboutContext } from '../../../contexts/AboutContext';


const showAboutPanel = {
    display: 'block'
}
const hideAboutPanel = {
    display: 'none'
}


export const AboutCat = () => {

    const {aboutPanel} = useContext(AboutContext)

    return (
    <div style = {aboutPanel ? showAboutPanel : hideAboutPanel} className="about-cat">
        <Interest />
    </div>
    )

}