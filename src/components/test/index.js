import React from 'react';
import './style.scss'

class Test extends React.Component{
    render(){
        return(
            <div className='dashboard'>
                <p>adf</p>
                {console.log('Hey bro from private routes')}
            </div>
        )
    }
};

export default Test ;