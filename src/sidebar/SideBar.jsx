import './SideBar.css'
import bootstrap, { Button } from 'bootstrap'

function SideBar() {

    // document.ready(function () {

    //     ("#sidebar").mCustomScrollbar({
    //          theme: "minimal"
    //     });
    
    //     ('#sidebarCollapse').on('click', function () {
    //         // open or close navbar
    //         ('#sidebar').toggleClass('active');
    //         // close dropdowns
    //         ('.collapse.in').toggleClass('in');
    //         // and also adjust aria-expanded attributes we use for the open/closed arrows
    //         // in our CSS
    //         ('a[aria-expanded=true]').attr('aria-expanded', 'false');
    //     });
    
    // });

    return(
        <div className="wrapper">
            {/* <!-- Sidebar --> */}
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Bootstrap Sidebar</h3>
                </div>

                <ul className="list-unstyled components">
                    <p>Dummy Heading</p>

                    <div className='dropdown'>
                        <li className="active">
                            <Button className="dropdown">Hoe</Button>
                            <ul className="dropdown-menu" id="homeSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>
                    </div>

                    <li>
                        <a href="#">About</a>
                    </li>

                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                            <li>
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>

            </nav>




            {/* <!-- Page Content --> */}
            <div id="content">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">

                        <button type="button" id="sidebarCollapse" className="btn btn-info">
                            <i className="fas fa-align-left"></i>
                            <span>Toggle Sidebar</span>
                        </button>
                    </div>
                </nav>
            </div>

    </div>
    )
}

export default SideBar