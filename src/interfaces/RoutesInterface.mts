import { Router } from "express"

export interface RouterInterface {
    router: Router,
    routes(): void
}