import User from "../../pages/[username]";
import data from "../../data/eddiejaoude.json";

export default {
  component: User,
};

export const Basic = {
  args: {
    data,
    BASE_URL: "https://linkfree.eddiehub.io/"
  }
};
