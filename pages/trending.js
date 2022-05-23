// import React from 'react'
// import Meta from '../components/Meta'

// const contact = () => {
//   return (
//     <div className='text-center mt-20'>
//         <Meta title="Contact Us" />
//       <h1 className='text-4xl font-bold'>Contact Us</h1>
//         </div>
//   )
// }

// export default contact





import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import SingleContent from '../components/SingleContent';
import CustomPagination from '../components/CustomPagination';



const contact = () => {
  const [page,setPage]=useState(1)
const [content, setContent] = useState([])
  const fetchTrending=async()=>{
  
    const {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&page=${page}`)

    setContent(data.results)
  }

  useEffect(() => {
    fetchTrending()
  }, [page])




  return (
    <div className="pageTitle">
      Trending
    
      <div className="flex flex-wrap justify-around">
      {content && content.map((c)=>    <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />)}
      </div>
      
      <CustomPagination setPage={setPage} />
      
    </div>
  );
}

export default contact




