import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
display: flex;
float: right;
`
const Div1 = styled.div`
`
const Div2 = styled.div`
`


function Header(){
    return(
        <div>
            <nav>
                <div>
                    <img src='/Asset/Img/download.png' alt='logo'/>
                    <ul>
                        <li>Features</li>
                        <li>Business</li>
                        <li>Explore</li>
                        <li>Marketplace</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div>
                    <input type='text' placeholder='search Udohub' />
                    <ul>
                        <li>Sign In</li>
                        <li>Sign Up</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header