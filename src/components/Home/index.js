import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import './index.scss';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['v', 'a', 'n', 'n', 'i', 'a']
    const jobArray = [
      '#',
      '1',
      ' ',   
      'B',
      'e',
      's',
      't',
      '-',
      'S',
      'e',
      'l',
      'l',
      'i',
      'n',
      'g',
      ' ',
      'A',
      'u',
      't',
      'h',
      'o',
      'r',
    ];
    //works without the return
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
      <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span> 
                    <img src={LogoTitle} alt="JavaScript Developer Name, Web Developer Name" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={21} />
                </h1>

                <h2>Public Speaker / Sr Strategic Software Planner</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
          <Logo />
        </div>

        <Loader type="pacman" />
        </>
    );
}

export default Home