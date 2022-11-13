// import LightDarkToggle from './LightDarkToggle.html'
import { useState } from 'react';
import { useEffect } from 'react';
import './LightDarkToggle.css'
import bootstrap from 'bootstrap'

function LightDarkToggle () {

    const [themeIcon, setThemeIcon] = useState()
    const [buttonType, setButtonType] = useState()
     
    const currentTheme = localStorage.getItem('theme');

    useEffect( () => {

        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
        
            if (currentTheme === 'dark') {
                console.log("The current theme is dark")
                // toggleSwitch.checked = true
                setThemeIcon(<img className='mode-icon' src="/images/sunny.png" alt="sun icon for light mode toggle"/>)
                setButtonType(<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={switchTheme} defaultChecked/>)


            } else {
                setThemeIcon(<img className='mode-icon' src={"/images/night.png"} alt="moon icon for dark mode toggle"/>)            
                setButtonType(<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={switchTheme} />)

            }
        }
    }, [])

    function switchTheme(e) {

        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setThemeIcon(<img className='mode-icon' src="/images/sunny.png" alt="sun icon for light mode toggle"/>)
            setButtonType(<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={switchTheme} defaultChecked/>)
            
        }
        else {        
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            setThemeIcon(<img className='mode-icon' src={"/images/night.png"} alt="moon icon for light mode toggle"/>)
            setButtonType(<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={switchTheme}/>)
        }    
    }
    

    return(
        <div className="theme-switch-wrapper">

            {themeIcon}

            {/* <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onClick={switchTheme}/>
                <div className="slider round"></div>
            </label> */}

            <div className="form-check form-switch">
                {buttonType}
            </div>

            
        </div>
    );

}

export default LightDarkToggle