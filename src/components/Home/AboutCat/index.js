import React from 'react'
import { Interest } from './components/Interests'
import { Preferences } from './components/Preferences'
import { PreferencesAges } from './components/PreferencesAges'
import { HTTP_CONSTANTS } from '../../../config/http-constants';
import { requestHttp } from '../../../config/http-server';

export const AboutCat = ({preferences, interest}) => {

    const prefChangeHandler = (gender) => {
        setPreferencesUpdate(prevState => ({
            ...prevState,
            gender:newGender
        }))
    }

    const prefAgeChangeHandler = (min, max) => {
        setPreferencesUpdate(prevState => ({
            ...prevState,
            age_min: min,
            age_max: max
        }))
    }

    useEffect (() => {
        if (JSON.stringify(preferences) != JSON.stringify(preferencesUpdated)){
            requestChangePreferences()
        }
    }, [preferencesUpdate])

    const requestChangePreferences = async () => { 
        try {
            const endpoint = HTTP_CONSTANTS.updatePreferences
            const bodyData = {
                preferences: preferencesUpdated
            }
            const response = await requestHttp('put', endpoint, bodyData) 
        } catch (err){
            console.error('Error:',err)
        }
    }

    return (
        <div className="about-cat">
            <Preferences onChange={ prefChangeHandler } gender={ preferences.gender } />
            <PreferencesAges notifyChange={ prefAgeChangeHandler } ageMax={ preferences.age_max } ageMin={ preferences.age_min } />
            <Interest interestCat={ interest } />
        </div>
    )
}
