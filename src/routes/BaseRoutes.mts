import { Router } from "express";
import { RouterInterface } from "../interfaces/RoutesInterface.mjs";

export default abstract class BaseRoutes implements RouterInterface {
    public router: Router = Router();

    constructor() {
        this.routes();
    }

    abstract routes(): void
}