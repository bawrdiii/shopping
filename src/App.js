import React from "react";
import Layout from "./components/layout/layout"
import Shopping from "./containers/Shopping/Shopping";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"



class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div >
          <Layout >
            <Routes>
              <Route path="/" element={<Shopping/> }  />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter >
    )
  }
}
export default App 