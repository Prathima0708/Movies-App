import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Chip from '@mui/material/Chip';



const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage
}) => {



  const handleAdd=(genre)=>{
    setSelectedGenres([...selectedGenres,genre])
    setGenres(genres.filter((g)=>g.id!==genre.id))
    setPage(1)
  }

  const handleRemove=(genre)=>{
    setSelectedGenres(selectedGenres.filter((selected)=>selected.id !==genre.id))
    setGenres([...genres,genre])
    setPage(1)
  }

    const fetchGenres=async()=>{
      const {data}= await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US`)
      setGenres(data.genres)
    }
    console.log(genres)

    useEffect(() => {
       fetchGenres()
     
       return ()=>{
           setGenres([])
       }
    },[])
  return (
    <div style={{padding:"6px 0"}}>Genres

{selectedGenres && selectedGenres.map((genre)=>(
      <Chip key={genre.id} label={genre.name} style={{margin:2}} size="small" color='primary' clickable onDelete={()=>handleRemove(genre)} />
    ))}

    {genres && genres.map((genre)=>(
      <Chip key={genre.id} label={genre.name} style={{margin:2}} size="small" clickable onClick={()=>handleAdd(genre)} />
    ))}
    </div>
  )
}

export default Genres

















