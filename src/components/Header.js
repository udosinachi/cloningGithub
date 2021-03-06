import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
display: flex;
justify-content: space-evenly;
align-items: center;
background: #080808;
color: white;
height: 4em;
`
const Ul = styled.ul`
list-style-type: none;
margin-right: 5em;
`
const Li = styled.li`
display: inline;
margin: 10px;
`
const Img = styled.img`
width: 4%;
border-radius: 4em;
`
const Div1 = styled.div`
margin-left: 15em;
`
const Div2 = styled.div`
`
const Input = styled.input`
margin: 1em;
padding: 5px;
`
const Button = styled.button`
margin: 0.5em;
background: black;
border: black;
color: white;
`

class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            text: ''
        }
        this.change = this.change.bind(this)
    }

    change(e){
        const {name, value} = e.target
        this.setState ({[name ] : e.target.value
        })
    }

    render(){
    return(
        <div>
            <Nav>
            <Img src='/Asset/Img/download 4.jpg' alt='logo'/>
                <Ul>
                    <Li>Features</Li>
                    <Li>Business</Li>
                    <Li>Explore</Li>
                    <Li>Marketplace</Li>
                    <Li>Pricing</Li>
                </Ul>
                <Div1>
                <Input 
                    type='text'
                    name='text'
                    value={this.state.text}
                    placeholder='search Udohub'
                    onChange={this.change}
                    />
                <Button>Sign In</Button>
                <Button>Sign Up</Button>
                </Div1>
            </Nav>
        </div>
    )
}
}

export default Header