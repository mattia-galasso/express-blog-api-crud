const express = require("express");
const posts = require("../data/posts");
const router = express.Router();

/*
 ? Index
*/
router.get("/", (req, res) => {
  const responseData = {
    result: posts,
    message: "Lista dei post",
    success: true,
  };

  res.json(responseData);
});

/* 
 ? Show
*/
router.get("/:id", (req, res) => {
  const postID = parseInt(req.params.id);
  // FIND
  const post = posts.find((post) => post.id === postID);

  if (!post) {
    const responseData = {
      message: `Dettagli post ${postID} non trovati!`,
      success: false,
    };
    return res.status(404).json(responseData);
  }

  const responseData = {
    result: post,
    message: `Dettagli post ${postID}`,
    success: true,
  };

  res.json(responseData);
});

/*
 ? Store
*/
/* router.post("/", (req, res) => {
  const responseData = {
    message: `Nuovo post creato!`,
    success: true,
  };

  res.json(responseData)
}); */

/* 
 ? Update 
*/
/* router.put("/:id", (req, res) => {
  const postID = req.params.id;

  const responseData = {
    message: `Post ${postID} interamente modificato`,
    success: true,
  };

  res.json(responseData)
}); */

/*
 ? Modify 
*/
/* router.patch("/:id", (req, res) => {
  const postID = req.params.id;

  const responseData = {
    message: `Post ${postID} parzialmente modificato`,
    success: true,
  };

  res.json(responseData)
}); */

/*
 ? Destroy 
*/
router.delete("/:id", (req, res) => {
  const postID = parseInt(req.params.id);

  // FILTER
  /* const post = posts.filter((post) => post.id !== postID); */

  // FIND
  const post = posts.find((post) => post.id === postID);

  if (!post) {
    const responseData = {
      message: `Post ${postID} non trovato!`,
      success: false,
    };
    return res.status(404).json(responseData);
  }

  const responseData = {
    result: post,
    message: `Eliminazione post ${postID}`,
    success: true,
  };

  res.json(responseData);
});

module.exports = router;
