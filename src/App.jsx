import axios from 'axios'
import { useEffect, useState } from 'react'
function App() {

  const [userData, setUserdata] = useState([])

  async function Data() {
    const responce = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
    console.log(responce.data)
    setUserdata(responce.data)
  }
  useEffect(function() {
    Data()
  },[])
  return <div className='overflow-auto'>
    <div className='p-[30px] flex flex-row flex-wrap gap-[10px]'>
      {userData.map(function(elem) {
        return <a href={elem.url} target='_blank'>
          <div className='h-50 w-44 overflow-hidden'>
            <img className='h-full object-cover w-full rounded-[20px]' src={elem.download_url}></img>
          </div>
        </a>

      })}
    </div>
  </div>
}

export default App
