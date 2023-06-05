import React, { useState, useEffect } from 'react';

export default function CustomSelect(){
  const [selectedItem, setSelectedItem] = useState('');
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('click', closeAllSelect);

    return () => {
      document.removeEventListener('click', closeAllSelect);
    };
  }, []);

  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const closeAllSelect = (event) => {
    if (!event.target.closest('.custom-select')) {
      setIsSelectOpen(false);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedItem(option);
    setIsSelectOpen(false);
  };

  return (
    <div className="custom-select" style={{ width: '200px',backgroundColor:"red", height:"300px"}}>
      <div className="select-selected" onClick={toggleSelect}>
        {selectedItem || 'Select car:'}
      </div>
      {isSelectOpen && (
        <div className="select-items">
          <div onClick={() => handleOptionClick('Select car:')}>
            Select car:
          </div>
          <div onClick={() => handleOptionClick('Audi')}>Audi</div>
          <div onClick={() => handleOptionClick('BMW')}>BMW</div>
          <div onClick={() => handleOptionClick('Citroen')}>Citroen</div>
          <div onClick={() => handleOptionClick('Ford')}>Ford</div>
          <div onClick={() => handleOptionClick('Honda')}>Honda</div>
          <div onClick={() => handleOptionClick('Jaguar')}>Jaguar</div>
      
        </div>
      )}
    </div>
  );
};


