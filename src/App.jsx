import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogiksForm from './modules/LogiksForm'
import { example5 } from "./data"
function App() {

  const onSubmit = (values) => {
    console.log("values",values)
    localStorage.setItem("data", JSON.stringify(values));
    alert("Form data saved successfully. ")
  }

  const onCancel = () => {
   alert("Cancelling")
  }

  const data = JSON.parse(localStorage.getItem("data") || "{}")
  return (
    <>
      <LogiksForm
        formJson={example5}
        data={data}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </>
  )
}

export default App
