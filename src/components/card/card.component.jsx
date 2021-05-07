import React from "react";
import {Link} from "react-router-dom";

// import Style
import { MainDiv } from "./card.style";
import { InfoStyle } from "./card.style";
import { AvatarStyle } from "./card.style";

const Card = ({ profile }) => {
  
  // console.log(data)
  
  return (
    <>
    
    <MainDiv>
      {/* Avatar */}
      <div>
      <Link to={{pathname:"/userdetails",aboutProps:{name:"hello world"}}} >
        <AvatarStyle src={profile.avatar_url} alt={profile.name} />
      </Link>
      </div>
      {/* Info */}
      <InfoStyle>
        {/* Name */}
        <div>{profile.name}</div>
        <div>@{profile.login}</div>
        {/* Github Link */}
        <div>
          GitHub Link:{" "}
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            {profile.html_url}
          </a>
        </div>
        {/* work */}
        <div>Work at:{profile.company}</div>
        {/* Info */}
        <div>Bio: {profile.bio}</div>
      </InfoStyle>
    </MainDiv>
    </>
  );
};

export default Card;
