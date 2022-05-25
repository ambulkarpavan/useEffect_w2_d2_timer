import React, { useEffect, useState } from 'react'

const Timer = ({initalValue , finalValue}) => {

    const [timer, setTimer] = useState(initalValue)

    useEffect(() => {
const id= setInterval(()=> {
if(timer>=finalValue){
    clearInterval(id);
}
else{
    setTimer(timer + 1);
}
},1000);

return()=>{
    clearInterval(id)
};
   
    },[timer]);
    
  return (
    <div>Timer : {timer}</div>
  )
}

export default Timer