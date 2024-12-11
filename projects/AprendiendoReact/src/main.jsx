import React from 'react'
import ReactDOM from 'react-dom/client'

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/
//es lo mismo q arriba
const root = ReactDOM.createRoot(document.getElementById('root'))

const Button = ({text}) => {
  return(
    <button>{text}</button>
  )
  
}

root.render(
          <React.Fragment>
            <Button text = "Hola" />
            <Button text = "Mundo" />
            <Button text = "xD" />
          </React.Fragment>
          )