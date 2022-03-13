import {React} from 'react'

export default function LandingPageComponent(props) {
  // const {test} = props
  console.log(props);

  return (
    <div 
    style={{
      background: "blue",
      height: '50px',
      padding: "1rem",
    }}>
    <h1>hello</h1>
      {/* <h2>Landing Page Component amber</h2>
      {test} */}
    </div>
  )
}
