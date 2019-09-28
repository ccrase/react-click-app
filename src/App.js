import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import { Container, Row, Col } from './components/CardContainer';
import  { Jumbotron } from './components/Jumbotron';
import { Image } from './components/Image';
import './App.css';
// import { tsConstructorType } from '@babel/types';
import images from './images.json';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      score: 0,
      totalScore: 13,
      clickedImages: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick= id => {
    // for(var i = 0; i < this.state.clickedImages.length; i++){
    //   if(id === this.state.clickedImages[i]){
    //     console.log("match");
    //   }else{
    //     this.setState({ clickedImages: this.state.clickedImages.push(id)});
    //     console.log('updated state ' + this.state.clickedImages);
    //   }
    // };
    console.log('Clicked this ' + id);
    this.shuffle(images);
    this.checkClicked(id);
  }

  checkClicked =(id) => {
    this.setState(state => {
      const list = state.clickedImages.push(id);
      return {list};
    });
    console.log(this.state.clickedImages);
    for(var i =0; i < this.state.clickedImages.length; i++){
      if(id === this.state.clickedImages[i]){
        alert('clicked the same image twice');
        this.setState({ score: 0});
      }else{
        console.log("in");
        this.setState({ score: ++this.state.score});
      }
    }
  }

  shuffle =(array) =>{
    array.sort(() => Math.random() - 0.5);
  }

  render(){
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
                  key ={image.id}
                  src={image.src}
                  id={image.id}
                  name={image.name}
                  onClick={this.handleClick} />
                )}

            </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default App;
