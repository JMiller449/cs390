import express from "express";

import {BlogModel} from "../schema/blog.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  // find blogs based on no condition==> get all blogs
  const blogs = await BlogModel.find({});
  // convert each blog to an object and send an array to client
  return res.send(blogs.map((blog) => blog.toObject()));
});

router.post("/create-post", async (req, res) => {
  try {
    console.log(req.body);
    // body should be JSON
    const body = req.body;
    // create blog model with the request body
    const blog = new BlogModel({content: body.content, title: body.title});
    // remember to await .save();
    // save to mongodb
    await blog.save();
    // get an object representation and send it back to the client
    return res.send(blog.toObject());
  } catch (e) {
    console.log(e);
  }
});

router.delete("/delete-post", async (req, res) => {
  try {
    console.log(req.body);
    //body should be JSON
    const body = req.body;
    // remove from mongodb
    const query = {content: body.content, title: body.title};
    await BlogModel.deleteOne(query);
    await BlogModel.save();
  } catch (e) {
    console.log(e);
  }
});

export default router;
