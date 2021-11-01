import React , {useState} from 'react' //here usestate is a hook we are importing it from react 

export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText); //this setText will change or update the value of text as newText
        props.showAlert('converted to uppercase' , 'success');
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('converted to lowercase' , 'success');
    }
    const handleOnChange =(event)=>{
        setText(event.target.value); //here this set text will append the value whatever we will be writing after the text default value that is enter the text here and will append the text after it to text variable
    }
    const handleclearClick =()=>{
        let newText = '';
        setText(newText);
        let noOfSentences = document.getElementById('noofsentences');
        noOfSentences.innerHTML = 'No of Sentences';
        noOfSentences.style.fontWeight = 'none';
        noOfSentences.style.padding = '0px';
        props.showAlert('Text cleard' , 'success');
    }
    const char = ()=>{
        // let removespace = text.replace(/ /g , "");
        // let length = removespace.length;
        // return length;
        let char = text.split("").length;
        return char;
    }
    const wordCount=()=>{
        let word = text.split(/\w+/g);
        return word.length-1;
        
    }
    const sentenceCount=()=>{
        // let sentenceCount;
        let newText = text.split(".");
        let noOfSentences = document.getElementById('noofsentences');
       noOfSentences.style.fontWeight = '500';
        noOfSentences.innerHTML = `No of Sentences - ${ newText.length-1}`;

    }

    const removeExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);//this says that whenever there is more than one spaces in the string split the string into an array
       setText(newText.join(" ")); //join the array element with one space 
       props.showAlert('Extra spaces removed' , 'success');
    
    }
    const copytext = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('copied to clipboard' , 'success');
    }
   
    const [text, setText] = useState('');    //this is the syntax of using the state in react
    //useState() --- will set the default value to the text here
    //here first variable text states the value we are setting to it 
    //setText is the function here we will be using to update our state 
    // text =  'new text' --- this is the wrong way of changing the state
    // setText('enter the new text here') ---- this is the write way of changing the state 
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?"white":"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-4">
                <textarea  id="myBox" value={text} onChange={handleOnChange}  rows="10" className="form-control text-light bg-dark"></textarea> 
                {/* here we use our text variable as the textarea value */}
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1" id='buttons' onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-success mx-1" id='buttons' onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1" id='buttons' onClick={handleclearClick}>Clear</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1' id='buttons' onClick={sentenceCount}>Count Sentences</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1' id='buttons' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1' id='buttons' onClick={copytext}>Copy Text</button>
        </div>
        <div className="container"  style={{color:props.mode==='dark'?"white":"black"}}>
            <h2>Your text summary</h2>
            <p>{wordCount()}  words and {char()} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p><b>{text.length>0?text:"Nothing to Preview"}</b></p>
            <h3 id="noofsentences" className='my-4'>No of Sentences</h3>
        </div>
        </>
    )
}
