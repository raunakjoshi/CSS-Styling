import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Soccer page</h1>
      <div class="container">
        <p>
          Football, also known as soccer in some parts of the world, is a
          globally cherished sport that unites people across cultures and
          continents. With a rich history dating back centuries, football has
          evolved into a spectacle that captivates millions of fans. Played on
          rectangular fields, the objective of the game is simple yet
          exhilarating: two teams of eleven players each compete to score goals
          by propelling a ball into the opposing team's net. The sport demands a
          harmonious blend of skill, strategy, and teamwork, showcasing the
          athletic prowess of its participants. Soccer, often described as the
          beautiful game, transcends borders and cultures, captivating the
          hearts of millions worldwide. Played on expansive fields with two
          teams of eleven players each, the objective is elegantly simple—score
          goals by maneuvering a spherical ball into the opponent's net. The
          sport's allure lies in its dynamic nature, blending strategy, skill,
          and athleticism. From grassroots matches in local communities to
          grandiose international tournaments like the FIFA World Cup, soccer
          fosters a sense of unity and passion among fans. It has produced
          iconic moments and legendary players, like Pelé, Diego Maradona,
          Lionel Messi, and Cristiano Ronaldo, whose feats on the pitch resonate
          across generations. The game's universal appeal is evident in the
          massive audiences that gather to witness the drama, skill, and
          excitement unfold on the field, making soccer a global phenomenon that
          unites people in the joy and camaraderie of competition.
        </p>
      </div>
      <br />
      <strong>Football has three main leagues in the world:</strong>
      <div>
        <ul>
          <li>English Premier League</li>
          <li>La Liga</li>
          <li>Bundaslega</li>
        </ul>
      </div>
      <img src="r.jpg" alt="soccer image" />
      <div>
        <a href="https://en.wikipedia.org/wiki/Football">click here</a>
      </div>
    </>
  );
}

export default App;
