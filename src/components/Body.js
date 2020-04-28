import React from 'react'
import styled from 'styled-components'

const A = styled.a`
text-decoration: none;
`
const Div = styled.div`
display: flex;
justify-content: space-evenly;
color: white;
height: 100vh;
background-color: #282c34;
`
const Label = styled.label`
`
const Div1 = styled.div`
width: 30%;
margin: 10%;
`
const Div2 = styled.div`
width: 30%;
background: white;
color: black;
margin: 6em;
padding: 5em;
`
const P = styled.p`
font-size: 11px;
`
const Input = styled.input`
width: 85%;
padding: 0.5em;
`
const Button = styled.button`
width: 90%;
padding: 0.6em;
color: white;
border: none;
background: #4caf50;
`


class Body extends React.Component{
    constructor(){
        super()
        this.state = {
            text: '',
            email: '',
            password: '',
        }
    }
    render(){
        return(
            <Div>
                <Div1>
                    <h1>Built by Udo for developers</h1>
                    <p>Udohub is a development platform inspired by the way you work from open source to business.
                    You can host and review codes, manage projects and build software alongside millions of other developers.
                    </p>
                </Div1>
                <Div2>
                    <form>
                        <Label><strong>Username</strong></Label><br/>
                        <Input type='text' placeholder='Pick a username' /><br/>
                        <Label><strong>Email</strong></Label><br/>
                        <Input type='email' placeholder='Your email address' /><br/>
                        <Label><strong>Password</strong></Label><br/>
                        <Input placeholder='password' /><br/>
                        <Label><P>Use at least one letter, one number and seven character</P></Label>
                        <Button>Sign up for udohub</Button>
                        <P>By clicking 'Sign up for udohub', you agree to our <A href='#'>terms and services</A> and <A href='#'>privacy policy</A>.
                             We will occassionally send your account emails.</P>
                    </form>
                </Div2>
            </Div>
        )
    }
}

export default Body