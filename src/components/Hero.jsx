import React from 'react'
import styled from 'styled-components'
import ButtonsPrimary from './buttons/ButtonsPrimary';
import Paragraph from './Paragraph/Paragraph';
import Titles from './Titles/Titles';
import HeroImages from '../assets/intro-section-with-dropdown-navigation-main/images/image-hero-desktop.png'
import HeroSvgAudio from '../assets/intro-section-with-dropdown-navigation-main/images/client-audiophile.svg'
import HeroSvgData from '../assets/intro-section-with-dropdown-navigation-main/images/client-databiz.svg'
import HeroSvgMaker from '../assets/intro-section-with-dropdown-navigation-main/images/client-maker.svg'
import HeroSvgMeet from '../assets/intro-section-with-dropdown-navigation-main/images/client-meet.svg'

const HeroStyles = styled.div`
  width: 100%;
  height: 635px;
  position: relative;
  .container__hero{
    max-width: 1200px;
    margin: 0px auto;
    padding: 80px 0px;
    .row__hero{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .wrapper__text__hero{
        width: 500px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items:flex-start;
        flex-direction: column;
        position: relative;
        .text__hero{
          h1{
            color: var(--black);
            font-size: 50px;  
          }
        }
        .heriIcon{
          width: 100%;
          position: absolute;
          bottom: 0;
          img{
            margin: 0px 10px;
          }
        }
      }
      .hero__images{
        width: 500px;
        height: 550px;
        img{
          height: 100%;
          width: 100%;
        }
      }
    }
  }
@media screen and (max-width:1024px){
  width: 100%;
  padding : 0px 10px;
  .container__hero{
    width: 100%;
  }
}
@media screen and (max-width:768px){
  width: 100%;
  min-height: 100%;
  padding: 0px 10px;
}
@media screen and (max-width:570px){
  width: 100%;
  min-height: 100vh;
  padding: 0px 10px;
  .container__hero{
    width: 100%;
    .row__hero{
      flex-direction: column-reverse;
      .wrapper__text__hero{
        width: 100%;
        .text__hero{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .heriIcon{
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 70px;
          }
        }
      }
      .hero__images{
        width: 100%;
        height: 300px;
      }
    }
  }
}
`;

function Hero() {
  return (
    <HeroStyles>
      <div className='container__hero'>
        <div className='row__hero'>
          <div className="wrapper__text__hero">
            <div className='text__hero'>
              <Titles title="Make Remote Work" />
              <Paragraph text="Get your team sync, no matter your location. 
                        Streamline processes, create team rituals, and watch productivity soar." />
              <ButtonsPrimary buttonPrimary='Learn More' />
            </div>
            <div className='heriIcon'>
              <img src={HeroSvgData} alt='heroSvg' />
              <img src={HeroSvgAudio} alt='heroSvg' />
              <img src={HeroSvgMeet} alt='heroSvg' />
              <img src={HeroSvgMaker} alt='heroSvg' />
            </div>
          </div>
          <div className='hero__images'>
            <img src={HeroImages} alt='Hero images' />
          </div>
        </div>
      </div>
    </HeroStyles>
  )
}

export default Hero
