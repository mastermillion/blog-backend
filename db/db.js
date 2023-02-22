import Sequelize from "sequelize";
import PostModel from "./Post.js";

const db = new Sequelize("postgres://artrellcapers@localhost:5432/blog");
const Post = PostModel(db);

const connectToDb = async () => {
  try {
    await db.authenticate();
    console.log("Connected to DB successfully");

    db.sync();
  } catch (error) {
    console.error(error);
    console.error("PANIC! DB PROBLEM");
  }
};

connectToDb();

export { db, Post };
