import styled from "styled-components";
import { TitleCards, FeatureCards } from "../../Cards";

const CardFeature = [
  {
    id: 1,
    title: "Banking made simple.",
  },
  {
    id: 2,
    title: "One app for all.",
  },
  {
    id: 3,
    title: "Unique experience.",
  },
  {
    id: 4,
    title: "Never wait for long.",
  },
];
const TeamBx = styled.div`
    .msgBx {
        display: flex;
        align-items: center;
    }

  @media (max-width: 640px) {
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
export function TeamContent(params) {
  return (
    <TeamBx>
      <div className="row">
        <div className="col-md-6">
          <TitleCards
            titleSection={"who we are"}
            msg1={"Elevating you"}
            msg2={"with UNO digital"}
            msg3={"Bank."}
          />
        </div>
        <div className="msgBx col-md-6">
          <p className="text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {CardFeature.map((card) => (
            <FeatureCards
              key={card.id}
              title={card.title}
              classN={
                "col-md-5  px-md-2  px-5 pt-5"
              }
            />
          ))}
        </div>
      </div>
    </TeamBx>
  );
}
