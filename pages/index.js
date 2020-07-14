import React from 'react';
import Link from 'next/link'
import NavBar from '../components/shared/NavBar'
import Footer from '../components/shared/Footer'
const IndexPage= () => {
    return (
        <div className="IndexPage__container hk-wrapper hk-vertical-nav">
            <div className="preloader-it">
                <div className="loader-pendulums"></div>
            </div>
            <NavBar/>

            <div className="hk-settings-panel">
                <div className="nicescroll-bar position-relative">
                    <div className="settings-panel-wrap">
                        <div className="settings-panel-head">
                            <img className="brand-img d-inline-block align-top" src="/img/logo-light.png" alt="brand" />
                            <a href="javascript:void(0);" id="settings_panel_close" className="settings-panel-close">
                                <span className="feather-icon">
                                    <i data-feather="x"></i>
                                </span>
                            </a>
                        </div>
                        <hr/>
                        <h6 className="mb-5">Layout</h6>
                        <p className="font-14">Choose your preferred layout</p>
                        <div className="layout-img-wrap">
                        <div className="row">
                            <a href="javascript:void(0);" className="col-6 mb-30 active">
                                <img className="rounded opacity-70" src="/img/layout1.png" alt="layout"/>
                                <i className="zmdi zmdi-check"></i>
                            </a>
                            <a href="dashboard2.html" className="col-6 mb-30">
                                <img className="rounded opacity-70" src="/img/layout2.png" alt="layout"/>
                                <i className="zmdi zmdi-check"></i>
                            </a>
                            <a href="dashboard3.html" className="col-6">
                                <img className="rounded opacity-70" src="/img/layout3.png" alt="layout"/>
                                <i className="zmdi zmdi-check"></i>
                            </a>
                        </div>
                    </div>
                    <hr/>
                    <h6 className="mb-5">Navigation</h6>
                    <p className="font-14">Menu comes in two modes: dark & light</p>
                    <div className="button-list hk-nav-select mb-10">
                        <button type="button" id="nav_light_select" className="btn btn-outline-light btn-sm btn-wth-icon icon-wthot-bg"><span className="icon-label"><i className="fa fa-sun-o"></i> </span><span className="btn-text">Light Mode</span></button>
                        <button type="button" id="nav_dark_select" className="btn btn-outline-primary btn-sm btn-wth-icon icon-wthot-bg"><span className="icon-label"><i className="fa fa-moon-o"></i> </span><span className="btn-text">Dark Mode</span></button>
                    </div>
                    <hr/>
                    <h6 className="mb-5">Top Nav</h6>
                    <p className="font-14">Choose your liked color mode</p>
                    <div className="button-list hk-navbar-select mb-10">
                        <button type="button" id="navtop_light_select" className="btn btn-outline-primary btn-sm btn-wth-icon icon-wthot-bg"><span className="icon-label"><i className="fa fa-sun-o"></i> </span><span className="btn-text">Light Mode</span></button>
                        <button type="button" id="navtop_dark_select" className="btn btn-outline-light btn-sm btn-wth-icon icon-wthot-bg"><span className="icon-label"><i className="fa fa-moon-o"></i> </span><span className="btn-text">Dark Mode</span></button>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <h6>Scrollable Header</h6>
                        <div className="toggle toggle-sm toggle-simple toggle-light toggle-bg-primary scroll-nav-switch"></div>
                    </div>
                    <button id="reset_settings" className="btn btn-primary btn-block btn-reset mt-30">Reset</button>
                </div>
            </div>
            <img className="d-none" src="/img/logo-light.png" alt="brand" />
            <img className="d-none" src="/img/logo-dark.png" alt="brand" />
        </div>

        <div className="hk-pg-wrapper">
            <div className="container mt-xl-50 mt-sm-30 mt-15">
                <div className="row">
					<div className="col-xl-12">
                        
						<section className="hk-sec-wrapper">
                            <h5 className="hk-sec-title">Menu Style</h5>
							<p className="mb-20">For vertical navigation you have to first add <code>hk-vertical-nav</code> className with <code>hk-wrapper</code>.</p>
							<p className="mb-20">For Horizontal navigation you have to first add <code>hk-horizontal-nav</code> className with <code>hk-wrapper</code>.</p>
							<p className="mb-20">For vertical alt navigation you have to first add <code>hk-alt-nav</code> className with <code>hk-wrapper</code>.</p>
							<p className="mb-20">For this menu style you have to add <code>hk-navbar-alt</code> className with <code>navbar</code></p>
							<p className="mb-20">For light & dark menu you can add <code>hk-nav-light</code> or <code>hk-nav-dark</code> with <code>hk-nav</code> className.</p>
							<p className="">For Scrollable Navigation please add <code>scrollable-nav</code> className with <code>hk-wrapper</code>.</p>
						</section>
					</div>
				</div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default IndexPage