import React, { useContext } from 'react'
import { Interest } from './components/Interests'
import { AboutContext } from '../../../contexts/AboutContext'
import { Preferences } from './components/Preferences'
import { PreferencesAge } from './components/PreferencesAges'


const showAboutPanel = {
    display: 'block'
}
const hideAboutPanel = {
    display: 'none'
}


export const AboutCat = ({ Preferences, interest }) => {

    const {aboutPanel} = useContext(AboutContext)

    return (
    <div style = {aboutPanel ? showAboutPanel : hideAboutPanel} className="about-cat">
        <Preferences gender={preference.gender} />
        <PreferencesAge ageMax={preferences.age_max} ageMin={preferences.age_min} />
        <Interest interestCat={Interest} />
    </div>
    )

}
