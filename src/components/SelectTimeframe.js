import React from 'react';

const SelectTimeframe = ({ onTimeFrameSelected }) => {
  return (
    <>
      <h2 className="SelectSunsign"> Please Select A TimeFrame</h2>
      <div className="grid">
        {['yesterday', 'today', 'tomorrow'].map((timeframes) => {
          return (
            <button
              className="buttons"
              key={timeframes}
              onClick={() => {
                onTimeFrameSelected(timeframes);
              }}
            >
              {timeframes}{' '}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SelectTimeframe;
