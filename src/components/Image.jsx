import React from 'react';

export class Image extends React.Component{

    handleClick(){
        console.log('handle click inside img constructor')
    }
    render(){
        return(
            <img className='img-thumbnail' src={this.props.src} alt={this.props.name} onClick={this.handleClick}/>
            )
        };
}
