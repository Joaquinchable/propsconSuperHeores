import React from 'react';
import HeroBox from "./components/HeroBox";
import HeroClass from "./components/HeroClass"
import ImgB from "./resources/img/batman.png";
import ImgM from "./resources/img/mujer-maravilla.jpg";
import ImgS from "./resources/img/superman.jpg";

const App = () => {
    return (
        <div>

            <HeroClass    name= "Peter Parker"  heroName="Spider-Man"  />



            <HeroBox  
            className = "Hero-Batman"
            name= "Bruce"   
            heroName = "Batman">
            <img src={ImgB} alt="Batman" />
            <h2>Biografia de Batman</h2>

            <p>
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).
        </p>


        <p>
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).
        </p>
                

          <a href="https://es.wikipedia.org/wiki/Batman">Batman</a>
        
         </HeroBox>
           
           
            <HeroBox   
              className = "Hero-Mujer-Maravilla"
              name= "Dianna" 
              heroName = "La Mujer Maravilla">

            <img src={ImgM} alt="Mujer Maravilla" />
            <h2>Biografia de la Mujer Maravilla</h2>

            <p>
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).
        </p>

        <a href="https://es.wikipedia.org/wiki/Mujer_Maravilla"> Mujer Maravilla </a>
            
            </HeroBox>
           
           
            <HeroBox
             className="Hero-Superman"   
             name= "Clark"   
             heroName = "Superman" >
            <h2>Biografia de Superman</h2>
            <img src={ImgS} alt="Superman" />

            <p>
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).
        </p>

        <a href="https://es.wikipedia.org/wiki/Superman">SuperMan</a>
           
           
            </HeroBox>
        </div>
    )
}

export default App;
