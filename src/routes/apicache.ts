import NodeCache from 'node-cache';

const cacheMiddleware = (duration) => {
    return (req, res, next) => {
      const cache = new NodeCache();
  
      const key = req.originalUrl;
      const cachedData = cache.get(key);
      if (cachedData) {
        res.send(cachedData);
      } else {
        res.originalSend = res.send;
        res.send = (body) => {
          cache.set(key, body, duration);
          res.originalSend(body);
        };
        next();
      }
    };
  };
  
  const cache = new NodeCache();
  
  export { cacheMiddleware, cache };
  