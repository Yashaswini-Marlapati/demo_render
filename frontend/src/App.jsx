import { BrowserRouter, Routes } from "react-router-dom"

function App()
{
  return(
    <>
    <h1>hello im app</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/reg" element={<Register/>} />
        <Route path="/h" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App