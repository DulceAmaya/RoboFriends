import React from 'react';

const Scroll = (props) =>{
    return(
        <div style = {{overflowY: 'scroll', marginTop:'10px', borderTop: '2px solid #590074', height: '460px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;
