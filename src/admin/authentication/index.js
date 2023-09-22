// authMiddleware.js
import { ROUTING_PATHS } from './main.constant';
import { TokenStorage } from '../../utils/index';

export default function authMiddleware(handler) {
 
  return async (req, res) => {
    const token = new TokenStorage; // Implement your token retrieval logic

    if (token.getToken()) {
      return handler(req, res);
    } else {
    //   res.writeHead(302, { Location: ROUTING_PATHS.LOGIN });
      res.end();
      return null;
    }
  };
}
