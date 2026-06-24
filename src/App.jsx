import axios from 'axios'
import { useEffect, useState } from 'react'
function App() {

  const [userData, setUserdata] = useState([])

  const [index, setIndex] = useState(1)

  async function Data() {
    const responce = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    console.log(responce.data)
    setUserdata(responce.data)
  }
  useEffect(function() {
    Data()
  },[index])
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
    <div className='flex justify-center align-center p-[20px]' >
      <button className='bg-yellow-500 text-[white]  pt-[10px] pb-[10px] pr-[30px] pl-[30px] rounded-[10px] cursor-pointer'
      onClick={function() {
        if(index >0) {
          setIndex(index-1)
          setUserdata([])
        }
      }}>Prev</button>
      <div className='mr-[20px] ml-[20px] flex justify-center items-center text-[17px]'>
        <h3 className='text-[white]'>Page {index}</h3>
      </div>
      
      <button className='bg-yellow-500 text-[white] mr-[20px] pt-[10px] pb-[10px] pr-[30px] pl-[30px] rounded-[10px] cursor-pointer'
      onClick={function() {
        setIndex(index+1)
        setUserdata([])
        
      }}>Next</button>
    </div>
  </div>
}

export default App
