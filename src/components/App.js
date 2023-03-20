import React, { useSyncExternalStore } from 'react';
import '../styles/App.css';
import { useEffect, useState } from 'react';
import SelectSign from './SelectSign';
import SelectTimeframe from './SelectTimeframe';
import Horoscope from './Horoscope';
const App = () => {
  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState(null);

  return (
    <div id="main">
      <div className="App">
        <div className="HoroscopeTitle"> The Horoscope App</div>

        {/* Implement the logic to display the sunsigns here use the SelectSunsignComponent for it */}

        {/* {selectedSign && !selectedTimeframe && <SelectTimeframe onTimeFrameSelected={setSelectedTimeframe} />} */}
        
        {/* {selectedTimeframe && <Horoscope id="HoroscopeComponent" sunsign={selectedSign} timeframe={selectedTimeframe} />} */}

        {/* Implement The reload button here */}

      </div>
    </div>
  );
};

export default App;

