import React from 'react'
import styled from 'styled-components'

const A = styled.a`
text-decoration: none;
`
const Div = styled.div`
display: flex;
justify-content: center;
color: white;
height: 100vh;
background-color: #202020;
align-items: center;
`
const Label = styled.label`
`
const Div1 = styled.div`
width: 20%;
margin-bottom: 100px;
`
const Div2 = styled.div`
width: 20%;
background: white;
color: black;
padding: 4em;
margin-left: 4em;
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

        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
    }

    change(e){
        const {name, value} = e.target
        this.setState ({
            [name] : e.target.value
        })
    }

    submit(e){
        e.preventDefault()
        
        const user = {
            text: this.state.text,
            email: this.state.body,
            password: this.state.password
        }

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            text: JSON.stringify(user),
            email: JSON.stringify(user),
            password: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data));
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
                    <form onSubmit={this.submit}>
                        <Label><strong>Username</strong></Label><br/>
                        <Input 
                            type='text' 
                            placeholder='Pick a username' 
                            name='text' 
                            value={this.state.text}
                            onChange={this.change}
                            /><br/>
                        <Label><strong>Email</strong></Label><br/>
                        <Input 
                            type='email' 
                            placeholder='Your email address' 
                            name='email' 
                            value={this.state.email}
                            onChange={this.change}
                            /><br/>
                        <Label><strong>Password</strong></Label><br/>
                        <Input 
                            placeholder='password' 
                            name='password' 
                            value={this.state.password}
                            onChange={this.change}
                            /><br/>
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