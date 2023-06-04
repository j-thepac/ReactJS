import React,{useState} from 'react'; 


export default function MyDiv(props) {
    const [i,seti]=useState(props.header)
    const fn=(event)=>{ seti(event.target.value)}
    const fx=()=>{alert(i)}
   
  return (
        <div>
             <div><textarea className="form-control" id="id1" rows="3" value={i} onChange={fn}>{props.header}</textarea></div>
            <button type="button" className="btn btn-primary" onClick={fx}>{props.header}</button>
        </div>
  );
}


