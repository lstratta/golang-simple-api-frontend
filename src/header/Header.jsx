import MenuBar from './MenuBar/MenuBar.jsx';
import LightDarkToggle from './LightDarkToggle/LightDarkToggle.jsx'

import bootstrap from 'bootstrap'
import './Header.css'

function Header () {
    return (
        
        <div className='container' id="header-div">
            <div className='row'>
                <div className='col-11'>
                    <MenuBar/>
                </div>
                <div className='col-1'>
                    <LightDarkToggle/>
                </div>
            </div>
        </div>

        
    )

}

export default Header;