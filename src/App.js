// import React from 'react';
import styled from 'styled-components';
import React, {Component} from 'react';
import Content from './components/Content';

class App extends React.Component {
  state = { //class만이 state를 가질 수 있다.
    //conponent에서 저장해야 할 자료
    query: ""
  };
  render() {
    return (
      <Container query={this.state.query}>
        <Input
          placeholder="테마를 입력하세요"
          onKeyPress={this.handleInputKeyPress}
        />
        <Content />
      </Container>
    );
  }

  handleInputKeyPress = event => {
    if (event.key === "Enter") {
      this.setState({
        query: event.target.value
      });
      event.target.value = "";
    }
  };
}


const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080?${props => props.query});
  background-size: cover;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 190px;
  height: 33px;
  padding: 3px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 22px;
  color: white;
`;

export default App;


{/*https://codingbroker.tistory.com/7?category=799512 */}