import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    //1st way
    // const[data,setData]=useState();
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/binnar81')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

    //2nd way
    const data=useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl' > Github Followers:{data.followers}
    <img src={data.avatar_url} alt="Github Pic" width={300} />
      
    </div>
  )
}

export default Github

export const githubInfoLoader=async ()=>{
const response=await fetch('https://api.github.com/users/binnar81');
const data=await response.json();
return data;
}


