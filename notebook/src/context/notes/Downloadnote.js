import React from 'react';
import NoteContext from '../context/notes/NoteContext';


const Downloadnote = (props) => {
  

    const downloadTextFile = (text) => {
      const textData = text;
      const blob = new Blob([textData], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'textfile.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
        <>
      {/* <button onClick={downloadTextFile}>
        Download Text File
      </button> */}

<NoteContext.Provider value={{downloadTextFile}}> 
{props.children} 
{/* NoteContext api will provide the access of all the states and methods which are assigned to the value  } */}
</NoteContext.Provider>
         </> 
    );
  };
export default Downloadnote;
