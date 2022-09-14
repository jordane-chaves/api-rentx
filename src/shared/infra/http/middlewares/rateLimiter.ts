import { Request, Response, NextFunction } from 'express';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import { createClient } from 'redis';

import { AppError } from '@shared/errors/AppError';

const redisClient = createClient({
  legacyMode: true,
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  },
});

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'rateLimiter',
  points: 10, // 10 requests
  duration: 5, // per 5 second by IP
});

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    await redisClient.connect();

    await limiter.consume(request.ip);

    return next();
  } catch {
    throw new AppError('Too Many Requests', 429);
  } finally {
    await redisClient.disconnect();
  }
}
