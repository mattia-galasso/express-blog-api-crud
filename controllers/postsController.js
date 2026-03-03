const posts = require("../data/posts");

const index = (req, res) => {
  const responseData = {
    result: posts,
    message: "Lista dei post",
    success: true,
  };

  res.json(responseData);
};

const show = (req, res) => {
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
};

const store = (req, res) => {
  const responseData = {
    message: `Nuovo post creato!`,
    success: true,
  };

  res.json(responseData);
};

const update = (req, res) => {
  const postID = req.params.id;

  const responseData = {
    message: `Post ${postID} interamente modificato`,
    success: true,
  };

  res.json(responseData);
};

const modify = (req, res) => {
  const postID = req.params.id;

  const responseData = {
    message: `Post ${postID} parzialmente modificato`,
    success: true,
  };

  res.json(responseData);
};

const destroy = (req, res) => {
  const postID = parseInt(req.params.id);
  const postFind = posts.find((post) => post.id === postID);

  if (!postFind) {
    const responseData = {
      message: `Post ${postID} non trovato!`,
      success: false,
    };
    return res.status(404).json(responseData);
  } else {
    // FILTER
    const post = posts.filter((post) => post.id !== postID);

    const responseData = {
      result: post,
      message: `Eliminazione post ${postID}`,
      success: true,
    };

    console.log(post);

    res.json(responseData);
  }
};

module.exports = { index, show, store, update, modify, destroy };
