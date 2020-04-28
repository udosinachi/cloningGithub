import React from 'react'
import styled from 'styled-components'

class Body extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h1>Built by Udo for developers</h1>
                    <p>Udohub is a development platform inspired by the way you work from open source to business.
                    You can host and review codes, manage projects and build software alongside millions of other developers.
                    </p>
                </div>
                <div>
                    <form>
                        <p>Username</p>
                        <input type='text' placeholder='Pick a username' />
                        <p>Email</p>
                        <input type='email' placeholder='Your email address' />
                        <p>Password</p>
                        <input placeholder='Password' />
                        <p>Use at least one letter, one number and seven character</p>
                        <button>Sign up for udohub</button>
                        <p>By clicking 'Sign up for udohub', you agree to our terms and services and privacy policy.
                             We will occassionally send your account emails.</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Body