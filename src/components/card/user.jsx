import React from "react";
import { RepoDiv  } from "./card.style";
import { InfoStyle } from "./card.style";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col, Media } from "react-bootstrap";

const Card1 = ({ profile, list }) => {
  console.log(list)
    return(
      <>
      <RepoDiv >
        <div>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={profile.avatar_url}
            alt={profile.name}
          />
          </div>
        <InfoStyle>
          <div>
          <h5>{profile.name}</h5>
          <p>@{profile.login}</p>
     
      </div>
      </InfoStyle>
      </RepoDiv >
      <div>
        <p>Bio: </p>
        <p>{profile.bio}
        </p>
      </div>
      <div><p >works at:</p> <p>{profile.company}</p></div>

      <div>
      <Container>
      <Row>
        <Col><div><h5>Repositories:</h5> <p>{profile.public_repos}</p></div></Col>
        <Col><div><h5>Followers:</h5><p>{profile.followers}</p></div> </Col>
      </Row>
      </Container>
      </div>
      
        <div > Pinned Repositories</div>
        {list.map((list)=> 
        <>
            <ul class="list-group">
              <li class="list-group-item">
                <p>{list.full_name}</p>
                <p>Description : {list.description}</p></li>
            </ul>
         </>
          )}
      </>
    )
};
export default Card1;