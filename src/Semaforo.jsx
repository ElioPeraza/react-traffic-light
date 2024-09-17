import './Semaforo.css';
import useState from 'react';




export const Semaforo = () => {

  const [light, setlight] = useState("");

  const activelight = (color) => {
    setLight(light === color ? "" : color );

  };






  return (
    <div id="semaforo">
      <div className={light === 'roja' ? 'luz roja activa':'luz roja'} onClick={() => activelight('roja')}> </div>
      <div className={"luz amarilla"}></div>
      <div className={"luz verde"}></div>
    </div>
  )
};