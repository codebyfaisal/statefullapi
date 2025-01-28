import USER from "../model/user.model.js";
import { v4 as uuidv4 } from "uuid";
import { setUser } from "../service/auth.js";

const handleUserSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Input validation
    if (!name) return res.render("signup", { message: "Enter Your name" });
    if (!email) return res.render("signup", { message: "Enter Your email" });
    if (!password)
      return res.render("signup", { message: "Enter Your password" });
    if (password.length < 6)
      return res.render("signup", {
        message: "Password must be 6 characters long",
      });

    // Check if the user already exists
    const exist = await USER.findOne({ email });
    if (exist)
      return res.render("signup", {
        message: "User already exist",
      });

    // Create the user
    const user = await USER.create({
      name,
      email,
      password,
    });

    // Handle case where user creation fails
    if (!user) {
      return res.render("signup", {
        message: "User creation failed. Please try again later.",
      });
    }

    return res.redirect("/login");
  } catch (error) {
    console.error(error);
    return res.render("signup", {
      message: "An error occurred. Please try again later.",
    });
  }
};

const handleUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email)
      return res.render("login", {
        message: "Enter your email",
      });
    if (!password)
      return res.render("login", {
        message: "Enter your password",
      });
    if (password.length < 6)
      return res.render("login", {
        message: "Incorrect password. Password must be 6 characters long",
      });

    // Check if the user exists
    const user = await USER.findOne({ email, password });
    if (!user)
      return res.render("login", {
        message: "Email / username or password is incorrect. Try again.",
      });

    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId);
    return res.redirect("/");
  } catch (error) {
    console.error(error);
    return res.render("login", {
      message: "An error occurred. Please try again later.",
    });
  }
};

export { handleUserSignup, handleUserLogin };
