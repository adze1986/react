import React from 'react';
// import logo from './logo.svg';
import './App.css';
import one from './images/1.jpeg';
import two from './images/2.jpeg';
import three from './images/3.jpeg';
import four from './images/4.jpeg';
import five from './images/5.jpeg';
import six from './images/6.jpeg';
import Text from './Text';
import Card from './Card';






class App extends React.Component{
    render(){
    return (
        <div className="App">
            <div>
                <h3>News Headlines</h3>
                <div>
                    <Card pic={one} text ="BlahBlah!: yep bla bla blaa Bllaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" topic="Heading One" />
                    <Card pic={two} text ="Blaaaadii blaaa" topic="Heading Two" />
                    <Card pic={three} text ="More Blahh" topic="Heading Three" />
                </div>
            </div>

            <div>
                <h3>Sports Headlines</h3>
                <div>
                    <Card pic={four} text ="Random: lalalalalalalaallaalalalalalalala" topic="Heading Four" />
                    <Card pic={five} text ="Peter piper picked a peice of pickled pepper from the peppered pickle store" topic="Heading Five" />
                    <Card pic={six} text ="More Blahh an lalalala" topic="Heading Six" />
                </div>
            </div>

        </div>

    );
  }
}
export default App;
