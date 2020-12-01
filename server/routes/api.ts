import * as express from 'express';
import * as morgan from 'morgan';
import { result } from '../setting/init_db'

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

    router.get('/users', (req, res) => {
      try {
        const query = result
        return res.status(200).send({users: query})

      } catch (error) {
        return res.status(500).send(error)
      }
    })

    module.exports = router;
  }
}

export default new Api().app;
