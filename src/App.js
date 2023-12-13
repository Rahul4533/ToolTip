import React from "react"
import Tool from "./tooltip"
export default class App extends React.Component{

  render(){

    return(
      <>
      <div>
        <Tool text="This is a tooltip!">
          <button className="box">Hover me</button>
        </Tool>
      </div>
      </>
    )
  }

}