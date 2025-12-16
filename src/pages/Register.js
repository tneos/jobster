import {useState, useEffect} from "react";
import {Logo, FormRow} from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, registerUser} from "../features/user/userSlice";
import {useNavigate} from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);
  const {user, isLoading} = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // TODO -- redux toolkit

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({...values, [name]: value});
  };

  const onSubmit = e => {
    e.preventDefault();
    const {name, email, password, isMember} = values;
    // Check if name provided when user not registered
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({email: email, password: password}));
      return;
    }
    // register action if user not registered
    dispatch(registerUser({name, email, password}));
  };

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember});
  };

  // Navigate to home page when user value changes
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            id="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email field */}
        <FormRow
          type="email"
          name="email"
          id="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          id="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register;
