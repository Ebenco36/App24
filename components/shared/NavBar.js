import React from 'react';
import Link from 'next/link'
const NavBar= () => {
    return (
        <div>
            <nav className="navbar navbar-expand-xl navbar-dark fixed-top hk-navbar">

            <a id="navbar_toggle_btn" className="navbar-toggle-btn nav-link-hover" href="javascript:void(0);">
                <i className="ion ion-ios-menu"></i>
            </a>
            <a className="navbar-brand" href="dashboard1.html">
                <img className="brand-img d-inline-block" src="/img/logo-dark.png" alt="brand" />
            </a>

            <ul className="navbar-nav hk-navbar-content">
                <li className="nav-item">
                    <a id="navbar_search_btn" className="nav-link nav-link-hover" href="javascript:void(0);"><i className="ion ion-ios-search"></i></a>
                </li>
                <li className="nav-item">
                    <a id="settings_toggle_btn" className="nav-link nav-link-hover" href="javascript:void(0);"><i className="ion ion-ios-settings"></i></a>
                </li>
                
                <li className="nav-item dropdown dropdown-authentication">
                    <a className="nav-link dropdown-toggle no-caret" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="media">
                            <div className="media-img-wrap">
                                <div className="avatar">
                                    <img src="/img/avatar12.jpg" alt="user" className="avatar-img rounded-circle"/>
                                </div>
                                <span className="badge badge-success badge-indicator"></span>
                            </div>
                            <div className="media-body">
                                <span>Madelyn Shane<i className="zmdi zmdi-chevron-down"></i></span>
                            </div>
                        </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
                        <a className="dropdown-item" href="/login"><i className="dropdown-icon zmdi zmdi-account"></i><span>Login</span></a>
                        <div className="dropdown-divider"></div>
                        <div className="sub-dropdown-menu show-on-hover">
                            <a href="#" className="dropdown-toggle dropdown-item no-caret"><i className="zmdi zmdi-check text-success"></i>Online</a>
                            <div className="dropdown-menu open-left-side">
                                <a className="dropdown-item" href="#"><i className="dropdown-icon zmdi zmdi-check text-success"></i><span>Online</span></a>
                                
                            </div>
                        </div>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#"><i className="dropdown-icon zmdi zmdi-power"></i><span>Log out</span></a>
                    </div>
                </li>
            </ul>
        </nav>
        <form role="search" className="navbar-search">
            <div className="position-relative">
                <a href="javascript:void(0);" className="navbar-search-icon">
                    <i className="ion ion-ios-search"></i>
                </a>
                <input type="text" name="example-input1-group2" className="form-control" placeholder="Type here to Search"/>
                <a id="navbar_search_close" className="navbar-search-close" href="#"><i className="ion ion-ios-close"></i></a>
            </div>
        </form>
        

        <nav className="hk-nav hk-nav-light">
            <a href="javascript:void(0);" id="hk_nav_close" className="hk-nav-close"><span className="feather-icon"><i data-feather="x"></i></span></a>
            <div className="nicescroll-bar">
                <div className="navbar-nav-wrap">
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#dash_drp">
                                <i className="ion ion-ios-keypad"></i>
                                <span className="nav-link-text">Dashboard</span>
                            </a>
                            <ul id="dash_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="dashboard1.html">CRM</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="dashboard2.html">Project</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="dashboard3.html">Statistics</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-with-badge" href="javascript:void(0);" data-toggle="collapse" data-target="#app_drp">
                                <i className="ion ion-ios-apps"></i>
                                <span className="nav-link-text">Application</span>
                                <span className="badge badge-primary badge-pill">4</span>
                            </a>
                            <ul id="app_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="chats.html">Chat</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="calendar.html">Calendar</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="email.html">Email</a>
                                        </li>
										<li className="nav-item">
                                            <a className="nav-link" href="file-manager.html">File Manager</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#auth_drp">
                                <i className="ion ion-ios-person-add"></i>
                                <span className="nav-link-text">Authentication</span>
                            </a>
                            <ul id="auth_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#signup_drp">
													Sign Up
												</a>
                                            <ul id="signup_drp" className="nav flex-column collapse collapse-level-2">
                                                <li className="nav-item">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="signup.html">Cover</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="signup-simple.html">Simple</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#signin_drp">
													Login
												</a>
                                            <ul id="signin_drp" className="nav flex-column collapse collapse-level-2">
                                                <li className="nav-item">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="login.html">Cover</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="login-simple.html">Simple</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#recover_drp">
													Recover Password
												</a>
                                            <ul id="recover_drp" className="nav flex-column collapse collapse-level-2">
                                                <li className="nav-item">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="forgot-password.html">Forgot Password</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="reset-password.html">Reset Password</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="lock-screen.html">Lock Screen</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="404.html">Error 404</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="maintenance.html">Maintenance</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#pages_drp">
                                <i className="ion ion-ios-copy"></i>
								<span className="nav-link-text">Pages</span>
                            </a>
                            <ul id="pages_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="profile.html">Profile</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="invoice.html">Invoice</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="gallery.html">Gallery</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="activity.html">Activity</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="faq.html">Faq</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr className="nav-separator"/>
                    <div className="nav-header">
                        <span>User Interface</span>
                        <span>UI</span>
                    </div>
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#Components_drp">
                                <i className="ion ion-ios-wallet"></i>
                                <span className="nav-link-text">Components</span>
                            </a>
                            <ul id="Components_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="alerts.html">Alerts</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="avatar.html">Avatar</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="badge.html">Badge</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="buttons.html">Buttons</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="cards.html">Cards</a>
                                        </li>
                                        
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#content_drp">
                                <i className="ion ion-ios-filing"></i>
                                <span className="nav-link-text">Content</span>
                            </a>
                            <ul id="content_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="typography.html">Typography</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="images.html">Images</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="media-object.html">Media Object</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#utilities_drp">
                                <i className="ion ion-ios-construct"></i>
                                <span className="nav-link-text">Utilities</span>
                            </a>
                            <ul id="utilities_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="background.html">Background</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="border.html">Border</a>
                                        </li>
                                        
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#forms_drp">
                                <i className="ion ion-ios-list-box"></i>
                                <span className="nav-link-text">Forms</span>
                            </a>
                            <ul id="forms_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="form-element.html">Form Elements</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="input-groups.html">Input Groups</a>
                                        </li>
                                        
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#tables_drp">
                                <i className="ion ion-ios-today"></i>
                                <span className="nav-link-text">Tables</span>
                            </a>
                            <ul id="tables_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="basic-table.html">Basic Table</a>
                                        </li>
                                        
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#charts_drp">
                                <i className="ion ion-ios-stats"></i>
                                <span className="nav-link-text">Charts</span>
                            </a>
                            <ul id="charts_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="line-charts.html">Line Chart</a>
                                        </li>
                                       
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#maps_drp">
                                <i className="ion ion-ios-map"></i>
                                <span className="nav-link-text">Maps</span>
                            </a>
                            <ul id="maps_drp" className="nav flex-column collapse collapse-level-1">
                                <li className="nav-item">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="google-map.html">Google Map</a>
                                        </li>
                                        
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr className="nav-separator"/>
                    <div className="nav-header">
                        <span>Getting Started</span>
                        <span>GS</span>
                    </div>
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item active">
                            <a className="nav-link" href="documentation.html">
                                <i className="ion ion-ios-book"></i>
                                <span className="nav-link-text">Documentation</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div id="hk_nav_backdrop" className="hk-nav-backdrop"></div>

        </div>
    )
}

export default NavBar