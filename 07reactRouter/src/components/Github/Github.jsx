// import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Itsarbaz51')
    //     .then(response => response.json())
    //     .then(data => {
    //         setdata(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'
    >Github followers : {data.followers}
    <img className='rounded-full' src={data.avatar_url} alt="git pictur" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Itsarbaz51')
    return response.json()
}