import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {actorRequest} from '../../action/action'
import {LayoutGuest, InputContent} from '../index.js'

class EmailActivation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            email: this.props.match.params.id
        }
    }
    render() {
        const {is_logged_in, request_status} = this.props
        
        return (!is_logged_in
            ? (request_status === 201
                ? <Redirect
                        to={{
                        pathname: `/success-signup`,
                        state: {
                            email: this.state.email
                        }
                    }}/>
                : this.renderMain())
            : <Redirect to="/"/>)
    }
    handlerChange = (e) => {
        const target = e.target
        this.setState({
            [target.name]: target.value
        })
    }
    handlerSubmit = (dispatcherRequest) => {
        let formData = new FormData()
        formData.append('code', this.state.code)
        formData.append('email', this.state.email)

        fetch('https://meikoapp.herokuapp.com/api/v1/user/verify', {
            method: 'POST',
            credentials: 'include',
            crossDomain: true,
            body: formData
        }).then((res) => {
            return res.json()
        }).then((data) => {
            data.code === 200
                ? dispatcherRequest(false, 201, '')
                : dispatcherRequest(false, 401, data.error)
        })
    }
    renderMain = () => {
        return (
            <LayoutGuest>
                <div className="_bl5c"></div>
                <form
                    className="_cn"
                    onSubmit={e => {
                    e.preventDefault();
                    this.handlerSubmit(this.props.dispatcherRequest)
                }}>
                    <div className="_ro">
                        <div className="_c5m310 _c5m3o1 _c5x312">
                            <h2 className="_he3cm">Thank you for your registration!</h2>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5m38 _c5m3o2 _c5x3o1 _c5x310">
                            <p className="_me3v">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                    <div className="_ro">
                        <InputContent
                            classWraper="_c5m36 _c5m3o3 _c5x3o1 _c5x310"
                            type="text"
                            name="code"
                            placeholder="Activation Code"
                            onChangeState={this.handlerChange}/>
                    </div>
                    <div className="_ro">
                        <div className="_c5m3o3 _c5m33 _c5x3o3  _c5x36">
                            <button className="_bt5m3m" type="submit">Activation</button>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5m3o3 _c5m36 _c5x3o3 _c5x36">
                            <p className="_me5f">
                                Have an account?
                                <b>
                                    <Link to={'/login'}>Login</Link>
                                </b>
                            </p>
                        </div>
                    </div>
                </form>
            </LayoutGuest>
        )
    }
}
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(EmailActivation)