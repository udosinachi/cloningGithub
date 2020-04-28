import React from 'react';

import Header from './components/Header'
import Body from './components/Body'

class App extends React.Component{
  render(){
    return(
      <div>
      <div>
        <Header />
      </div>
        <div>
          <Body/>
        </div>
      </div>
    )
  }
}

export default App;