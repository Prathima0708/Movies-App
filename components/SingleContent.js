/* eslint-disable @next/next/no-img-element */
import { Badge } from "@mui/material";
import { img_300, unavailable } from "./config";
import ContentModal from "./Modal/Modal";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  const color = vote_average > 6 ? "primary" : "secondary";
  const imgSrc = poster ? `${img_300}${poster}` : unavailable;
  const subTitle = media_type === "tv" ? "TV Series" : "Movie";
  return (
    <ContentModal media_type={media_type} id={id} className="cursor-pointer">
      <Badge badgeContent={vote_average} color={color} />
      <img className="rounded-lg" src={imgSrc} alt={title} />

      <b className="w-full text-center text-xl p-2 text-white">{title}</b>
      <span className="subTitle  text-white">
        {subTitle}
        <span className="w-full text-center text-xl p-2  text-white">
          {date}
        </span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
