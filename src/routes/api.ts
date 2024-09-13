import express from 'express';
import { cacheMiddleware } from './apicache';
import { connection } from '../utils/database';

const api = express.Router()

export default api;