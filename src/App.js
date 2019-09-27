import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import { Container, Row, Col } from './components/CardContainer';
import  { Jumbotron } from './components/Jumbotron';
import { Image } from './components/Image';
import './App.css';
// import { tsConstructorType } from '@babel/types';

// importing all the game images 
import instagram from './images/instagram.png';
import facebook from './images/facebook.png'
import android from './images/android.png'
import google from './images/google-plus.png'
import paypal from './images/paypal.png'
import pinterest from './images/pinterest.png'
import reddit from './images/reddit.png'
import snapchat from './images/snapchat.png'
import twitter from './images/twitter.png'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      score: 0,
      totalScore: 13,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    console.log('Clicked thizz');
    this.setState({ score: ++this.state.score});
  }

  render(){

    const images = [{
      name: "instagram",
      src: instagram,
      id: 1
    },
    {
      name: "facebook",
      src: facebook,
      id: 2
    },
    {
      name: "android",
      src: android,
      id: 3
    },
    {
      name: "google",
      src: google,
      id: 4
    },
    {
      name: "paypal",
      src: paypal,
      id: 5
    },
    {
      name: "pinterest",
      src: pinterest,
      id: 6
    },
    {
      name: "reddit",
      src: reddit,
      id: 7
    },
    {
      name: "snapchat",
      src: snapchat,
      id: 8
    },
    {
      name: "twitter",
      src: twitter,
      id: 9
    }];

    return (
      <div className="App">
        <Navbar 
          score={this.state.score}
          totalScore={this.state.totalScore}/>
        <Jumbotron />
        <Container> 
          <Row>
            <Col>
              {images.map((image) => 
                <Image 
                  src={image.src}
                  name={image.name}
                  onClick={this.handleClick}
                  data-id={image.id}/>
                )}

            </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default App;
