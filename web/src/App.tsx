interface ButtonProps{
  title: string
}

function Button(props: ButtonProps){
  return(
    <button >
      {props.title}
    </button>
  )
}

function App() {
  return(
    <div>
      <h1>Hello World</h1>
      <Button title="oi" />
    </div>
  )
}

export default App
