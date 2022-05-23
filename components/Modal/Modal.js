import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import YouTubeIcon from '@mui/icons-material/YouTube';

import classes from './Modal.module.css'
import axios from 'axios';
import { useState ,useEffect} from 'react';

import { Button } from '@mui/material';
import { img_500, unavailable, unavailableLandscape } from '../config';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  width:'90%',
  height:'90%',
  backgroundColor:'#39445a',
  borderRadius:10,
  color:'white'
};

export default function ContentModal({children,media_type,id}) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState([])
  const [video,setVideo]=useState()

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fecthData=async()=>{
      const {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US`)
      setContent(data)
  }

  const fecthVideo=async()=>{
    // const {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos/?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US`)

    const {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US`)

    console.log(data)
    setVideo(data.results[0]?.key);
}

useEffect(() => {
   fecthData()
   fecthVideo()
}, [])

  return (
    <>
      <div onClick={handleOpen} className={classes.media}>{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
              {content &&
         <div className={classes.ContentModal}>
<img className={classes.ContentModal__portrait} alt={content.name || content.title} src={content.poster_path ? `${img_500}/${content.poster_path}`:unavailable}  />

<img className={classes.ContentModal__landscape} alt={content.name || content.title} src={content.backdrop_path ? `${img_500}/${content.poster_path}`:unavailableLandscape}   />

<div className={classes.ContentModal__about}>
    <span className={classes.ContentModal__title}>
        {content.name || content.title}(
            {(
                content.first_air_date ||
                content.release_date || "-----"
            ).substring(0,4)}
        )
    </span>

    {content.tagline && (
        <i className={classes.tagline}>{content.tagline}</i>
    )}
    <span className={classes.ContentModal__description}>
        {content.overview}
    </span>
    <div>
{/* <Carousel media_type={media_type} id={id} /> */}
    </div>
 <Button variant='contained' startIcon={<YouTubeIcon/>} color='secondary' target='_blank' href={`https://www.youtube.com/watch?v=${video}`}>Watch the Trailer</Button>
</div>
         </div>}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}











