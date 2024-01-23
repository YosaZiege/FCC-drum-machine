
import React, { useEffect , useState} from 'react';
import './App.css';
import { GiDrumKit } from 'react-icons/gi';



function App() {
  const [display , setDisplay ] = useState("");
  function playSound(key) {
    const audio = document.getElementById(key);
    if (audio) {
      audio.play();
      setDisplay(key);
    }
  }
  const audios = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      playSound(event.key.toUpperCase());
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div id="drum-machine">
      <GiDrumKit style={{ flex: '100%', marginRight: '2rem', color: 'aliceblue' }} size={50} id="drum-icon" />
     
      <div className='drum-pads'>
        {audios.map((drumPad) => (
          <div key={drumPad.keyCode} className='drum-pad' id={`drum-${drumPad.text}`} onClick={() => playSound(drumPad.text)}>
            {drumPad.text}
            <audio className="clip" id={drumPad.text} src={drumPad.src}></audio>
          </div>
        ))}
         <div id="display">Key Pressed {display} </div>
      </div>
    </div>
  );
}

export default App;
