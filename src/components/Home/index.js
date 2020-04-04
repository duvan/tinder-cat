import React, { useState, useEffect } from 'react'
import { Profile } from './Profile'
import { ViewCats } from './ViewCats'
import { AboutCat } from './AboutCat'
import { ProfileContextStore } from '../../contexts/ProfileContext';
import { AboutContextStore }  from '../../contexts/AboutContext';

export const Home = () => {

    return (
    <div className="home-page">
        <AboutContextStore>
        <ProfileContextStore>
            <Profile />
            <ViewCats />
            <AboutCat />
        </ProfileContextStore>
        </AboutContextStore>
        
    </div>
    )
}