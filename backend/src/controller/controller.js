const User = require("../model/User");

exports.createUser = async (ctx) => {
  const { name, email, phone, password } = ctx.request.body;

  if (!name || !email || !phone || !password) {
    ctx.status = 400;
    ctx.body = { error: "Missing required fields" };
    return;
  }

  try {
    const newUser = await User.createUser({ name, email, phone, password });
    console.log("User added successfully");
    ctx.status = 201;
    ctx.body = { message: "User created successfully", newUser };
  } catch (error) {
    console.error("Failed to add user:", error);
    ctx.status = 500;
    ctx.body = { error: "Failed to add user" };
  }
};

exports.updateUser = async (ctx) => {
  const { id } = ctx.params;
  const { name, email, phone, password } = ctx.request.body;

  try {
    const updatedData = await User.updateUser({
      id,
      name,
      email,
      phone,
      password,
    });
    console.log("User updated successfully");
    ctx.status = 200;
    ctx.body = { message: "User updated successfully", updatedData };
  } catch (error) {
    console.error("Failed to update user:", error);
    ctx.status = 500;
    ctx.body = { error: "Failed to update user" };
  }
};

exports.deleteUser = async (ctx) => {
  const { id } = ctx.params;

  try {
    await User.deleteUser(id);
    console.log("User deleted successfully");
    ctx.status = 200;
    ctx.body = { message: "User deleted successfully" };
  } catch (error) {
    console.error("Failed to delete user:", error);
    ctx.status = 500;
    ctx.body = { error: "Failed to delete user" };
  }
};

exports.getUserByEmail = async (ctx) => {
  // console.log(ctx.params);
  const { email } = ctx.params;

  if (!email) {
    ctx.status = 400;
    ctx.body = { error: "Email parameter is required" };
    return;
  }

  try {
    const user = await User.getByEmail(email);
    if (user.length === 0) {
      ctx.status = 404;
      ctx.body = { message: "User not found" };
    } else {
      console.log("User retrieved successfully");
      ctx.status = 200;
      ctx.body = { message: "User retrieved successfully", user };
    }
  } catch (error) {
    console.error("Failed to retrieve user by email:", error);
    ctx.status = 500;
    ctx.body = { error: "Failed to retrieve user by email" };
  }
};

exports.getUserByPhone = async (ctx) => {
  const { phone } = ctx.params;

  if (!phone) {
    ctx.status = 400;
    ctx.body = { error: "Phone parameter is required" };
    return;
  }

  try {
    const data = await User.getByPhone(phone);
    if (data.length === 0) {
      ctx.status = 404;
      ctx.body = { error: "User not found" };
      return;
    }
    ctx.status = 200;
    ctx.body = data;
  } catch (err) {
    console.error("Failed to retrieve user by phone:", err);
    ctx.status = 500;
    ctx.body = { error: "Failed to retrieve user by phone" };
  }
};

exports.getAllUsers = async (ctx) => {
  try {
    const users = await User.getAllUsers();
    console.log("Users retrieved successfully");
    ctx.status = 200;
    ctx.body = { message: "Users retrieved successfully", users };
  } catch (error) {
    console.error("Failed to retrieve users:", error);
    ctx.status = 500;
    ctx.body = { error: "Failed to retrieve users" };
  }
};
