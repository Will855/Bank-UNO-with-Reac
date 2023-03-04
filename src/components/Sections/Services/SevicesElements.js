import styled from "styled-components";
import CreditCard from "../assets/credit-card-green.png";
import { TitleCards, FeatureCards } from "../../Cards";
export const Cards = [
  {
    id: 1,
    title: "Securing Money",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
  },
  {
    id: 2,
    title: "Leveraging Money",
    description:
      "Contrary to popular belief, Lorem Ipsum is not It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 3,
    title: "Maximizing Money",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 4,
    title: "Growging Money",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];

export const ContentServices = styled.div`
  padding-top: 13%;

  @media (max-width: 640px) {
    .subtitleBtn {
      font-size: 30px;
    }
    .subtitle {
      font-size: small;
    }
    h1 {
      font-size: 45px;
    }
    h2 {
      font-size: 38px;
    }
    p {
      font-size: small;
    }
  }
`;

const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function ContentAssets(params) {
  return (
    <ContentImg className="col-6 ">
      <img className="d-none d-md-block " src={CreditCard} alt="credit-card" />
    </ContentImg>
  );
}

export function ContentCard() {
  return (
    <div className="col-lg-6  ">
      <TitleCards
        titleSection={"our Servises"}
        msg1={"Enjoy an elevated"}
        msg2={"banking experience"}
        msg3={"with UNO!"}
        subtitle={
          "It a long established fact that a reader will be distracted by the readable content of a page."
        }
      />
      <div className="container">
        <div className="row">
          {Cards.map((Card) => (
            <FeatureCards
              key={Card.id}
              title={Card.title}
              classN={
                "col-md-6 mx-md-0 px-md-2 col-xs-8 mx-sm-auto px-sm-5 pt-5"
              }
              description={Card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
