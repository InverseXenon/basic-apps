import { useState } from "react";
function App(){
  const[count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count+1);
  }
  const handleReduce = () => {
    setCount(count-1);
  }
  const handleRestart = () =>{
    setCount(0);
  }
  

  return (
    <div style={{display:"flex-col" , alignContent:"center", justifyContent:"center", marginLeft:"500px"}}>
      <div>
        <h1>Mera Counter</h1>
      </div>
      <div style={{alignContent:"center"}}>
        <p style={{textAlign: "center"}}>{count}</p>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  )
}

export default App