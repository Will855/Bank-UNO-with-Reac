import styled from "styled-components";
import { TitleCards } from "../../Cards";
import { BsArrowRight } from "react-icons/bs";
const ContainerBx = styled.div`
  padding-top: 15%;

  #buttonFeature {
    background-color: #1b755a;
    color: #fff;
    font-size: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 640px) {
    .subtitleBtn{
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
    p{
      font-size: small;
    }
  }
`;
const ButtonFeature = styled.div`
  padding-top: 40px;
  .section2 {
    display: flex;
    justify-content: center;
  }
  .section3 {
    display: flex;
    justify-content: center;
  }
  .btn {
    border-radius: 5rem;
    background-color: #1b755a;
    color: #fff;
    font-size: 40px;
    cursor: pointer;
  }
  @media (max-width: 980px) {
    .section2 {
      justify-content: start;
    }
  }
`;
export function FeatureBx() {
  return (
    <ContainerBx className="container">
      <div className="row">
        <div className="col-lg-6">
          {/* Section 1 */}
          <TitleCards
            titleSection={"our services"}
            msg1={"Our features"}
            msg2={"sepecial for you"}
            subtitle={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            }
          />
        </div>

        <ButtonFeature className="col col-lg-6" id="padding">
          <div className="section2">
            <button className="btn" type="button">
              {/* Section 2 */}
              <div>
                <span className="subtitleBtn">Stay in the loop!</span> <BsArrowRight />
              </div>
            </button>
          </div>
          <div className="container">
            <div className="row">
              <span className="mx-auto"></span>
              <div className="col">
                <div className="section3">{/* Section 3 */}</div>
              </div>
            </div>
          </div>
        </ButtonFeature>
      </div>
    </ContainerBx>
  );
}
