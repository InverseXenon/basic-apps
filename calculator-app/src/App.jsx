function App(){
  return (
    <div style={{ textAlign:"center", marginTop:"50px"}}>
      <h1>Mera Calculator!</h1>
      {/* Display */}
      <div style={
        {border:"1px solid black",
          width: "200px",
          margin:"10px auto",
          padding:"10px",
          fontSize:"20px",
          textAlign:"right"
        }
      }>
        <p>0</p>
      </div>
      {/* Buttons */}
      <div style={{ width:"200px", margin:"auto"}}>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>/</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>x</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>

        <button>0</button>
        <button>.</button>
        <button>=</button>
        <button>+</button>
        <div>
          <button style={{width:"100%", background:"red" , color:"white"}}>C</button>
        </div>
      </div>
    </div>
  )
}

export default App