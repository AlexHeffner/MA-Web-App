import React from 'react'
import useFetch from '../../../helpers/useFetch'

const AboutPage = () => {
  const {data, loading,error} = useFetch("https://v2.jokeapi.dev/joke/Any");
  
  return (
    <>
    <div>AboutPage</div>
    <pre id="json">{loading ? "Loading" :  JSON.stringify(data,null, 2)}</pre>

    </>
  )
}

export default AboutPage