// this file contains the context api funtions for utility task such as downloading , copying and expanding
import React from 'react';
import Downloadcontext from './Downloadcontext';

import clipboardCopy from 'clipboard-copy';// react library use for copying text to clip board 
import { useContext, useState } from 'react';
import Alertcont from './Alertcont';


const Downloadnote = (props) => {
  const context2 = useContext(Alertcont) // using alert context api 
  const { usealert } = context2

  const [selectednote, setNote] = useState({ id: "", title: "", description: "", tag: "" })

  const downloadTextFile = (title, text) => { // this function will download the note in browser in the form text file 
    const titleData = title // name of file 
    const textData = text; // text of note 
    const blob = new Blob(["TITLE- " + titleData, "\n", "NOTE- " + textData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = titleData;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    usealert("your note is downloaded in browser") // calling the alert api funtion 
  };

  const handleCopyClick = (textToCopy) => { // this funtion will copy the note text to the clip board
    clipboardCopy(textToCopy);
    usealert("Text Is Copied To Clipboard")
  };

  const handleExpand = (title, desc, tag) => {// this funtion will provide the expand view for note 
    setNote({ id: "", title: title, description: desc, tag: tag })
  }

  return (
    <>


      <Downloadcontext.Provider value={{ downloadTextFile, handleCopyClick, handleExpand, selectednote }}> 
        {props.children}
        {/* Downloadcontext api will provide the access of all the states and methods which are assigned to the value  } */}
      </Downloadcontext.Provider>
    </>
  );
};
export default Downloadnote;
