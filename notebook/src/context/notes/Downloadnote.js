import React from 'react';
import Downloadcontext from './Downloadcontext';

import clipboardCopy from 'clipboard-copy';
import { useContext } from 'react';
import Alertcont from './Alertcont';


const Downloadnote = (props) => {
    const context2 = useContext(Alertcont)
  const { usealert } = context2

    const downloadTextFile = (title,text) => {
      const titleData=title
      const textData = text;
      const blob = new Blob([titleData,"\n",textData], { type: 'text/plain'});
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = titleData;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      usealert("your note is downloaded in browser")
    };

    const handleCopyClick = (textToCopy) => {
        clipboardCopy(textToCopy);
        // alert('Text copied to clipboard!');
        usealert("Text Is Copied To Clipboard")
      };
  
    return (
        <>


<Downloadcontext.Provider value={{downloadTextFile,handleCopyClick}}> 
{props.children} 
{/* Downloadcontext api will provide the access of all the states and methods which are assigned to the value  } */}
</Downloadcontext.Provider>
         </> 
    );
  };
export default Downloadnote;
