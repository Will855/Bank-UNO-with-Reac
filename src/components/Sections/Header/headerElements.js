import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
const HeaderBx = styled.div`
  background: rgb(13, 13, 13);
  background: -moz-linear-gradient(
    141deg,
    rgba(13, 13, 13, 1) 0%,
    rgba(33, 83, 102, 1) 39%,
    rgba(52, 82, 15, 1) 58%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-linear-gradient(
    141deg,
    rgba(13, 13, 13, 1) 0%,
    rgba(33, 83, 102, 1) 39%,
    rgba(52, 82, 15, 1) 58%,
    rgba(0, 0, 0, 1) 100%
  );
  background: linear-gradient(
    141deg,
    rgba(13, 13, 13, 1) 0%,
    rgba(33, 83, 102, 1) 39%,
    rgba(52, 82, 15, 1) 58%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0d0d0d",endColorstr="#000000",GradientType=1);
  .h1Bx {
    display: flex;
    align-items: flex-end;
  }
  .description {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-left: 5rem;
    margin-bottom: 5rem;
  }
  @media (max-width: 980px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 767px) {
    .h1Bx {
      justify-content: center;
    }
    .description {
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 0;
      margin-left: 5;
    }
  }
  @media (max-width: 640px) {
    .h1Bx {
      justify-content: center;
    }
    .description {
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 0;
      margin-left: 0;
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 38px;
    }
    p {
      font-size: small;
    }
  }
`;



export function HeaderContent(params) {
  return (
    <HeaderBx className="container-fluid">
      <div className="container-fluid min-vh-100 row">
        <div className="col-md mb-5 h1Bx">
          <h1 className="title-header text-capitalize">
            Experience <br /> Elevated Banking.
          </h1>
        </div>
        <div className="col-sm-auto description">
          <div>
            <p className="fw-lighter">
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              <br />
              Vestibulum ex libero.
            </p>
            <button class="btn btn-success rounded-5 px-3" type="submit">
              Stay in the loop <BsArrowRight className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </HeaderBx>
  );
}
