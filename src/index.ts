import app from "./app";
import { config } from "./config";

const port = process.env.PORT || 5000;

app.listen(port, () => {
  return console.log(`Server is listening on port ${port}.`);
});
