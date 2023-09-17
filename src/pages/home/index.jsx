import React from 'react'
import { HomePageWrapper } from './style'
import { Header } from '../../components/layout/header'
import { Body } from '../../components/layout/body'
import { Footer } from '../../components/layout/footer'

const HomePage = () => {
    return (
        <HomePageWrapper>
            <Header/>
            <Body />
            <Footer /> 
        </HomePageWrapper>
    )
}

export default HomePage