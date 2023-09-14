import express, { Application, Request, Response } from 'express';
import UserRoutes from './routes/UserRoutes.mjs';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

interface AppInterface {
    app: Application
}

class App implements AppInterface {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
    }

    protected plugins(): void {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));
        this.app.use(compression());
        this.app.use(cors());
        this.app.use(helmet());
    }

    protected routes(): void {
        this.app.get('/', (req: Request, res: Response) => {
            res.send('okeee');
        })

        this.app.use('/users/', UserRoutes);
    }
}

const port: number = 3000;
const app = new App().app;
app.listen(port, () => console.log(`App running in port ${port}`))

// const app = express();

// app.get('/', (req: Request, res: Response) => {
//     res.send('mantul eee')
// })

// app.listen(3000, () => {
//     console.log('app running')
// })