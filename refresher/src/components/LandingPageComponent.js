import React, {useEffect} from 'react'

export default function LandingPageComponent(props) {
  const { test, getPrinciples, principlesObject } = props

  useEffect(() => {
    getPrinciples()
  }, [getPrinciples])
  console.log(`home: ${principlesObject.principles}`);

  return (
    <div>
      home
      <br/>
      PROP: {test}
    {principlesObject.principles.map((p, i) => (
      <li>{p}</li>
    ))}
    </div>
  )
}
