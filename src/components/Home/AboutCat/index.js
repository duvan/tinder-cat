import React from 'react'
import { Interest } from './components/Interests'
import { Preferences } from './components/Preferences'
import { PreferencesAges } from './components/PreferencesAges'

export const AboutCat = ({preferences, interest}) => {

    return (
        <div className="about-cat">
            <Preferences gender={ preferences.gender } />
            <PreferencesAges ageMax={ preferences.age_max } ageMin={ preferences.age_min } />
            <Interest interestCat={ interest } />
        </div>
    )
}
