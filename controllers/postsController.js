const postsData = require("../data/posts");

const index = (req, res) => {
  let posts = [...postsData];

  //* SEARCH
  const searchValue = req.query.search;

  if (searchValue) {
    posts = posts.filter((post) => {
      const normalizedSearchValue = searchValue.toLowerCase().trim();

      for (const tag of post.tags) {
        const normalizedPostTag = tag.toLowerCase().trim();
        if (normalizedPostTag.includes(normalizedSearchValue)) return true;
      }

      return false;
    });
  }

  const responseData = {
    result: posts.map(postsResponse),
    message: "Lista dei post",
    success: true,
  };

  res.json(responseData);
};

const show = (req, res) => {
  const postID = parseInt(req.params.id);

  //* FIND
  const post = postsData.find((post) => post.id === postID);

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
  const postFind = postsData.find((post) => post.id === postID);

  if (!postFind) {
    const responseData = {
      message: `Post ${postID} non trovato!`,
      success: false,
    };
    return res.status(404).json(responseData);
  } else {
    // FILTER
    const post = postsData.filter((post) => post.id !== postID);

    const responseData = {
      result: "Nessun Contenuto",
      message: `Post ${postID} eliminato!`,
      success: true,
    };

    console.log(postsData);

    res.status(204).json(responseData);
  }
};

const postsResponse = (post) => {
  const imagePath = "http://localhost:3000" + post.image;
  return { ...post, image: imagePath };
};

module.exports = { index, show, store, update, modify, destroy };
