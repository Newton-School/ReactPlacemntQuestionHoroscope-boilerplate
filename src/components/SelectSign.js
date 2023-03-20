import React from 'react';
import { useState, useEffect } from 'react';

const SelectSign = ({ onSignSelected }) => {

  /* Implement the use effect hook and call the api also set the output in the usestate */

  return (
    <>
      <h2 className="SelectSunsign"> Please Select A Sign</h2>
      <div className="grid">
        {signs.map((sign) => {
          return (
            <button
              className="buttons"
              key={sign}
              onClick={() => {
                onSignSelected(sign);
              }}
            >
              {sign}{' '}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SelectSign;
