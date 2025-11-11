import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from "../components";
import {Link} from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job<span> tracking </span>app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nesciunt, placeat
            neque est qui delectus sapiente nisi! Nostrum porro mollitia animi corrupti,
            exercitationem recusandae, voluptatum ex, repellat voluptates iure illum?
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        {/* main image */}
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
