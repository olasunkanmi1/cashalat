import React from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components/macro'
import playstorelogo from '../images/icons/playstore.svg'
import applestorelogo from '../images/icons/apple.svg'

//styles
const style = css`
    display: grid;
    place-items: center;
    grid-template-columns: .2fr .8fr;
    padding: 5px;
    width: 140px;
    height: 45px;
    background: #0847A8;
    border-radius: 5px;

    h5 {
        font-size: 9px; 
    }

    h4 {
        font-size: 13px;
         font-weight: 700;
    }
` 
const PlayStore = styled(Link)`
    ${style};

    img {
        width: 25px;
        height: 25px;
    }
`

const AppleStore = styled(Link)`
    ${style};

    
    img {
        width: 30px;
        height: 30px;
    }
`

const Get = styled.section`
    display: flex;
    flex-direction: column;
    color: #fff;

    
`

const PlaystoreApple = () => {
    return (
        <>
           <PlayStore>
                <img src={playstorelogo} alt="playstore" />
                <Get>
                    <h5>Get it on</h5>
                    <h4>Play Store</h4>
                </Get>
           </PlayStore>

           <AppleStore>
                <img src={applestorelogo} alt="applestore" />
                <Get>
                    <h5>Download on the</h5>
                    <h4>App Store</h4>
                </Get>
           </AppleStore>
        </>
    )
}

export default PlaystoreApple
