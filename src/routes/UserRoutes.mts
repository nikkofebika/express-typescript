import UserController from '../controllers/UserController.mjs';
import BaseRoutes from './BaseRoutes.mjs';

class UserRoutes extends BaseRoutes {
    routes() {
        this.router.get('/', UserController.index);
        this.router.get('/:id', UserController.index);
        this.router.post('/', UserController.create);
        this.router.put('/:id', UserController.update);
        this.router.delete('/:id', UserController.delete);
    }
}

export default new UserRoutes().router;