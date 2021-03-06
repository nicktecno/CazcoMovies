import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import TransitionsModal from "../ContentModal/ContentModal";
import { Poster, Subtitle, Title } from "./FileListStyled";

const FileList = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <TransitionsModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <Poster src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <Title className="title">{title}</Title>
      <Subtitle className="subTitle">
        <Subtitle>{media_type === "tv" ? "TV Series" : "Movies"}</Subtitle>
        <Subtitle className="subTitle">{date}</Subtitle>
      </Subtitle>
    </TransitionsModal>
  );
};

export default FileList;
