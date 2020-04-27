import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
display: flex;
justify-content: space-evenly;
align-items: center;
background: #282c34;
color: white;
height: 4em;
`
const Ul = styled.ul`
list-style-type: none;
margin-right: 10em;
`
const Li = styled.li`
display: inline;
margin: 10px;
`
const Img = styled.img`
width: 4%;
`
const Div1 = styled.div`
margin-left: 20em;
`
const Div2 = styled.div`
`
const Input = styled.input`
margin: 1em;
padding: 9px;
`
const Button = styled.button`
margin: 0.5em;
background: #282c34;
border: #282c34;
color: white;
`

class Header extends React.Component{
    render(){
    return(
        <div>
            <Nav>
            <Img src='/Asset/Img/download.png' alt='logo'/>
                <Ul>
                    <Li>Features</Li>
                    <Li>Business</Li>
                    <Li>Explore</Li>
                    <Li>Marketplace</Li>
                    <Li>Pricing</Li>
                </Ul>
                <Div1>
                <Input type='text' placeholder='search Udohub' />
                <Button>Sign In</Button>
                <Button>Sign Up</Button>
                </Div1>
            </Nav>
        </div>
    )
}
}

export default Header