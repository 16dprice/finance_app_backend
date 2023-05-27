import * as express from "express";
import { Express } from "express-serve-static-core";

class App {
  public express: Express;

  constructor() {
    this.express = express();
    this._mountRoutes();
  }

  private _mountRoutes(): void {
    const router = express.Router();

    router.get("/", (req, res) => {
      res.json({ message: "Go away!" });
    });

    this.express.use("/", router);
  }
}

export default new App().express;
