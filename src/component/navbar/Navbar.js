import React, {Component} from 'react'
//import {Switch} from 'react-router'

class Navbar extends Component{
    render(){
        return(
            <div className="_cn">
            <div className="_c5x32">
                <nav className="_cn5n">
                    <i className="fa fa-bars _i5h" aria-hidden="true"></i>
                    <ul className="_n">
                        <div className="_n51">
                            <li><img className="_i3c" src="/img/icon/white/logo copy 4.png" alt="logo"/></li>
                            <li className="_n3a"><a href=""><i className="fa fa-home" aria-hidden="true"></i></a></li>
                            <li><a href=""><i className="fa fa-clone" aria-hidden="true"></i></a></li>
                            <li><a href=""><i className="fa fa-clock-o" aria-hidden="true"></i></a></li>
                            <li><a href=""><i className="fa fa-tasks" aria-hidden="true"></i></a></li>
                        </div>
                        <div className="_n52">
                            <li><a href=""><i className="fa fa-bell-o" aria-hidden="true"></i></a></li>
                            <li><a href=""><i className="fa fa-cog" aria-hidden="true"></i></a></li>
                            <li><a onClick={this.props.handleOut } href="#"><i className="fa fa-power-off" aria-hidden="true"></i></a></li>
                        </div>
                    </ul>
                </nav>
            </div>
            <div className="_c5x3o1 _c5x39">
                <p className="_me5ts _pd3cr">11.59 PM | Monday, September 11, 2017</p>
            </div>
        </div>
        )   
    }
}
export default Navbar
