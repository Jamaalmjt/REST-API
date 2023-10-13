import express from 'express';

import { getAllUSERS } from 'controllers/users';
import { isAuthenticated } from 'middlewares';

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUSERS);
};