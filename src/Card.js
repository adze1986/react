import React from 'react';
import Text from './Text';

const Card =(props)=>{
    return(
        <div className="card">
            <div className="card-img">
                <img src = {props.pic} />
            </div>
            <div>
                <Text text= {props.text} topic={props.topic} />
            </div>
        </div>
    )
}
export default Card;