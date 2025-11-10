import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

function Landing() {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
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
          <button className="btn btn-hero">Login/Register</button>
        </div>
        {/* main image */}
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
}
export default Landing;
