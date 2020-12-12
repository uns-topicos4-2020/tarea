import * as express from 'express';
import * as morgan from 'morgan';
import * as companiesCTRL from '../controllers/Company_CTRL'
import * as usersCTRL from '../controllers/User_CTTRL'
// const usersCTRL = require("../controllers/User_CTTRL")
// const companiesCTRL = require("../controllers/Company_CTRL")
// const { ValidToken } = require("../helpers/JWT")
import * as auth from '../helpers/JWT'
class Api {
  public app;
  private message: String = 'String response from server';

  constructor () {
    this.app = express();
    this.app.use(morgan("combined"));

    this.mountRoutes();
  }

  // Access this API route using {GET} localhost:3017/api/hello 
  private mountRoutes (): void {
    const router = express.Router();
    router.get('/hello', (req, res) => {
      res.json({
        message: this.message
      });
    });

    router.get("/companies", auth.ValidToken,  companiesCTRL.ReadCompanies)
    router.post("/companies", auth.ValidToken, companiesCTRL.CreateCompanies)
    router.put("/companies", auth.ValidToken, companiesCTRL.UpdateCompanies)
    router.delete("/companies", auth.ValidToken, companiesCTRL.DeleteCompanies)

    router.post("/signin", usersCTRL.SignIn)
    router.get("/users", usersCTRL.ReadUser)
    router.post("/users", usersCTRL.CreateUser)
    router.put("/users", usersCTRL.UpdateUser)
    router.delete("/users", usersCTRL.DeleteUser)
    module.exports = router;
  }
}

export default new Api().app;
