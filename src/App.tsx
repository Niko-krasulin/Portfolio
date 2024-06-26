import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {About} from "./layout/sections/about/About";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <About />
            <Works />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;

//TODO