import { Button, Tab, Tabs, TextField } from "@mui/material";
import React from "react";
import { useState,useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import SingleContent from "../components/SingleContent";
import CustomPagination from "../components/CustomPagination";


const search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState();
  const [numOfPages, setNumOfPages] = useState();

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#000",
      },
    },
  });

  const fetchSearch=async()=>{
   const {data}= await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv":"movie"}?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
   setContent(data.results)
   setNumOfPages(data.total_pages)
  }

  useEffect(() => {
   window.scroll(0,0)
   fetchSearch()
  }, [type,page])

 

  return (
    <div>
        <ThemeProvider theme={darkTheme}>
        <div className="flex my-3">
            <TextField
             style={{ flex: 1 }}
               className="searchBox"
              label="Search"
    variant="filled"
               onChange={(e) => setSearchText(e.target.value)}
            />
             <Button variant="contained" style={{ marginLeft: 10 }} onClick={fetchSearch}>
            
             <SearchIcon className="bg-black h-7 rounded-md" />
            </Button>
         </div>
  
        <Tabs
           value={type}
             indicatorColor="primary"
            textColor="primary"
           onChange={(event, newValue) => {
             setType(newValue);
              setPage(1);
           }}
           >
            <Tab label="Search Movies" style={{ width: "50%" }} />
            <Tab label="Search TV Series" style={{ width: "50%" }} />
          </Tabs>
       </ThemeProvider> 
      <div className="flex flex-wrap justify-around">
      {content && content.map((c)=>    <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv":"movie"}
              vote_average={c.vote_average}
            />)}
    {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}

{searchText &&
          !content &&
          (type ? <h2 className="text-black">No Series Found</h2> : <h2 className="text-black">No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );


};

export default search;
