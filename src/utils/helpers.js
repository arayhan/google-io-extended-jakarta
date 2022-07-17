const handleBrokenImage = (event) => {
  event.target.src = require("@assets/images/dummy-avatar.jpg");
};

export const HELPERS = { handleBrokenImage };
