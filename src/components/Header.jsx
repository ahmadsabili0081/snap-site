import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import styled from 'styled-components'
import Logo from './Logo';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonHeader from './buttons/ButtonHeader';
import TodoIcon from '../assets/intro-section-with-dropdown-navigation-main/images/icon-todo.svg'
import CalenderIcon from '../assets/intro-section-with-dropdown-navigation-main/images/icon-calendar.svg'
import PlanningIcon from '../assets/intro-section-with-dropdown-navigation-main/images/icon-planning.svg'
import ReminderIcon from '../assets/intro-section-with-dropdown-navigation-main/images/icon-reminders.svg'
import arrowDown from '../assets/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg'
import arrowUp from '../assets/intro-section-with-dropdown-navigation-main/images/icon-arrow-up.svg'

const HeaderStyles = styled.header`
    width: 100%;
    position: absolute;
    top: 0;
    padding: 2%;
    z-index: 1;
    .container__header{
      max-width: 1200px;
      margin: 0px auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      nav.navbar{
        width: 90%;
        display: flex;
        justify-content: space-between;        
        align-items: center;
        ul{
          display: flex;
          justify-content: space-between;
          align-items: center;
          li{
            margin: 0px 10px;
            padding: 10px;
            cursor: pointer;
            img.dropwdownArrow{
              margin: 0px 5px;
            }
            a{
              font-size: 17px;
              color: var(--gray);
              font-weight: 700;
              position: relative;
            }
          }
        }
        ul.dropdown{
          display: flex;
          width: 150px;
          top: 65px;
          position: absolute;
          border-radius: 10px;
          padding: 5px;
          background-color: var(--color-text);
          box-shadow: 2px 5px 10px rgba(0,0,0,0.45);
          align-items: flex-start;
          flex-direction: column;
          li{
             margin: 5px 0px;
             padding: 5px 10px;
            }
        }
        button.login{
          border: none;
          background-color: unset;
          color: var(--gray);
        }
        button.register{
          background-color: unset;
          border: 1px solid var(--gray);
          color: var(--gray);
        }
      }
    }
@media screen and (max-width:768px) {
  .container__header{
    width: 100%;
    nav.navbar{
      display: flex;
      width: 50%;
      background-color: rgb(255, 255, 255);
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      z-index: 2;
      overflow-x: hidden;
      justify-content: space-evenly;
      box-shadow: 2px 5px 10px rgba(0,0,0,0.45);
      flex-direction: column;
      transition: 0.5s;
      ul{
        width: 100%;
        flex-direction: column;
        align-items: center;
        li{
          text-align: center;
          width: 200px;

        }
      }
      ul.dropdown{
          display: flex;
          top: 5px;
          left: 50px;
          position: relative;
          width: 100%;
          border-radius: 10px;
          padding: 5px;
          background-color:  rgb(255, 255, 255);
          align-items: flex-start;
          flex-direction: column;
          box-shadow: none;
          li{
            text-align: left;
             margin: 5px 0px;
             padding: 5px 10px;
            }
        }
    }
  }
  .hamburger{
      font-size: 25px;
      margin-top: -7px;
    }
    .closeNavbar{
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 25px;
    }
  nav.navbar.open{
      right: -100%;
    }
}
@media screen and (max-width:570px){
  width: 100%;
  padding: 4%;
  .container__header{
    width: 100%;
    .hamburger{
      font-size: 25px;
      margin-top: -7px;
    }
    .closeNavbar{
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 25px;
    }
    nav.navbar.open{
      right: -100%;
    }
    nav.navbar{
      display: flex;
      width: 70%;
      background-color: rgb(255, 255, 255);
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      z-index: 2;
      overflow-x: hidden;
      justify-content: space-evenly;
      flex-direction: column;
      transition: 0.5s; 
      box-shadow: 2px 5px 10px rgba(0,0,0,0.45);
      ul{
        width: 100%;
        flex-direction: column;
        align-items: center;
        li{
          text-align: center;
          width: 200px;

        }
      }
      ul.dropdown{
          display: flex;
          top: 5px;
          left: 50px;
          position: relative;
          width: 100%;
          border-radius: 10px;
          padding: 5px;
          background-color:  rgb(255, 255, 255);
          align-items: flex-start;
          flex-direction: column;
          box-shadow: none;
          li{
            text-align: left;
             margin: 5px 0px;
             padding: 5px 10px;
            }
        }
    }
  }
}
`;
function Header(props) {
  const [IsNav, setNav] = useState(false);
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [mobile, setMobile] = useState(
    window.matchMedia('(max-width:768px)').matches
  );
  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobile(window.matchMedia('(max-width:768px)').matches)
    });
  }, []);
  let handleDropdown = () => {
    setDrop(true);
    if (drop) {
      setDrop(false);
    }
    if (drop2) {
      setDrop2(false)
    }
  }
  let handleDropdownCompany = () => {
    setDrop2(true);
    if (drop2) {
      setDrop2(false);
    }
    if (drop) {
      setDrop(false)
    }
  }
  let handleNavbar = () => {
    setNav(true)
  }
  let handleCloseNav = () => {
    if (IsNav) {
      setNav(false);
    }
  }
  return (
    <HeaderStyles>
      <div className='container__header'>
        <Logo />
        <nav className={IsNav ? 'navbar' : 'navbar open'}>
          {IsNav && (
            <div className='closeNavbar' onClick={handleCloseNav}>
              <FontAwesomeIcon icon={faClose} />
            </div>)}
          <ul>
            <li><Link onClick={handleDropdown} to='Features'>Features
              {!drop ? (<img className='dropwdownArrow' src={arrowDown} alt='arrow' />)
                : (<img className='dropwdownArrow' src={arrowUp} alt='arrow' />)}</Link>
              {drop &&
                (<ul className='dropdown'>
                  <li><Link to='test'><img src={TodoIcon} alt="IconTodo" /> Todo List</Link></li>
                  <li><Link to='test'><img src={CalenderIcon} alt="IconTodo" /> Calender</Link></li>
                  <li><Link to='test'><img src={ReminderIcon} alt="IconTodo" /> Reminders</Link></li>
                  <li><Link to='test'><img src={PlanningIcon} alt="IconTodo" /> Planning</Link></li>
                </ul>)}
            </li>
            <li><Link onClick={handleDropdownCompany} to='Company'>Company  {!drop2 ? (<img className='dropwdownArrow' src={arrowDown} alt='arrow' />)
              : (<img className='dropwdownArrow' src={arrowUp} alt='arrow' />)}</Link>
              {drop2 &&
                (<ul className='dropdown'>
                  <li><Link to='test'>History</Link></li>
                  <li><Link to='test'>Our Team</Link></li>
                  <li><Link to='test'>Blog</Link></li>
                </ul>)}
            </li>
            <li><Link to='Careers'>Careers</Link></li>
            <li><Link to='About'>About</Link></li>
          </ul>
          <div className='containerButtons'>
            <ButtonHeader class='login' buttons='Login'></ButtonHeader>
            <ButtonHeader class='register' buttons='Register'></ButtonHeader>
          </div>
        </nav>
        {mobile && <div onClick={handleNavbar} className='hamburger'><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></div>}
      </div>
    </HeaderStyles>
  )
}
export default Header;
