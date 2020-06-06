import React, { useEffect, useState, Fragment } from 'react'
import { Profile } from './Profile'
import { ViewCats } from './ViewCats'
import { AboutCat } from './AboutCat'
import { ProfileContextStore } from '../../contexts/ProfileContext';
import { AboutContextStore }  from '../../contexts/AboutContext';
import { HTTP_CONSTANTS } from '../../config/http-constants';
import { requestHttp } from '../../config/http-server';

export const Home = () => {
    
    const [cat, setCat] = useState({})

    const autologin = async () => {
        try {
            const endpoint = HTTP_CONSTANTS.autologin
            const response = await requestHttp('post', endpoint)

            const {status, cat } = response
            if (response.status === 1) {
                setCat(cat)
            } else {
                unauthorized()
            }
        } catch (err) {
            unauthorized()
        }
    }

    const unauthorized = () => {
        sessionStorage.removeItem('_TOKEN_')
        window.location.href = '/login'
    }

    useEffect  (() => {
        autologin ()        

        return () =>{}
    }, [])

    return (
    <div className="home-page">
        <ProfileContextStore>
        <AboutContextStore>
            { 
                !Object.keys(cat).length //false == 0
                ? <p>Loading app...</p>
                : <Fragment>
                    <Profile bio={cat.bio} nick={cat.nick} image={cat.image} />
                    <ViewCats />
                    <AboutCat />
                </Fragment>
            }   
        </AboutContextStore>
        </ProfileContextStore>

    </div>
    )
}
