import React, {Component} from 'react';
import Link from 'next/link'
import {Redirect} from 'react-router-dom'
import {postData} from '../../services/postData'
class dashboard extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            token:"",
            user:""
            
          }
        this.logout = this.logout.bind(this);
      }
    

      componentDidMount(){

        if(!localStorage.getItem('user')){
            window.location.href = '/login'

        }
        else{
            if(localStorage.getItem('user')){
                let user_dat = JSON.parse(localStorage.getItem('user'));
                console.log(user_dat);
                let token_use = localStorage.getItem('user_token');
                this.setState({
                    token:token_use,
                    user: user_dat
                })
            }

            console.log(this.state)
        }
    }
    

    getUsername(){
        var data = this.state.user
		if(data != "" && data != 'undefined'){
        //console.log(data)
			return data;
		}
    }
    
      logout(){
          if(window.localStorage.getItem('user')){
            localStorage.removeItem("user");
            localStorage.removeItem("user_token");
            window.location.href = '/login'
          }
          else{
              alert("You cannot be here")
              window.location.href = '/login'
          }
      }
    render () {

        var dataa = this.getUsername() ? this.getUsername(): '';
        const stylee = {
            padding:'10px',


        }
    return (
      <div className="IndexPage__container hk-wrapper hk-vertical-nav">
    

	<div className="hk-wrapper">
    <div className="hk-pg-wrapper hk-auth-wrapper">
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 pa-0">
                        <div className="auth-form-wrap pt-xl-0 pt-100">
                            <div className="auth-form w-xl-25 w-sm-50 w-100">
                                Welcome to your dashboard
                                <div style={stylee}>
                                    profile details
                                    <hr/>
                                    <span>Username: </span>{dataa.username}<br/>
                                    <span>verify code expiration: </span>{dataa.verify_code_expiration}<br/>
                                    <span>Created: </span>{dataa.createdAt}<br/>
                                </div>
                                <button onClick={this.logout} className="btn btn-link">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
</div>
    )
    }
}

export default dashboard