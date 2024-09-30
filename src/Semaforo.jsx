import './Semaforo.css';
import { useState, useEffect } from 'react';




export const Semaforo = () => {

  const [light, setLight] = useState("roja");
  const [active, setActive] = useState(false)

  const activeLight = (light) => {
    setLight(light)
  }


  useEffect(() => {
    let autoLight = null;
    if (active) {
      autoLight = setInterval(() => {
        setLight((changeLight) =>
          changeLight === "roja" ? "verde" :
            changeLight === "verde" ? "amarilla" : "roja"
        );
      }, 3000);
      
      return () => clearInterval(autoLight);
    }
  }, [active]);

  const handleButtonClick = () => {
    setActive((activar) => !activar);
  };

  return (
    <div>

      <div id="semaforo">
        <div className={`luz roja ${light == "roja" ? "activa" : ""}`} onClick={() => activeLight("roja")} ></div>
        <div className={`luz amarilla ${light == "amarilla" ? "activa" : ""}`} onClick={() => activeLight("amarilla")}></div>
        <div className={`luz verde ${light == "verde" ? "activa" : ""}`} onClick={() => activeLight("verde")}></div>
      </div>
      <button onClick = {handleButtonClick}> {!active ? " Stop" : " Start"} Change light</button>
    </div>
  )
};