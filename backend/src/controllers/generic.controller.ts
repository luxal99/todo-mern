export class GenericController {
    protected app: any = null;

    constructor(app) {
        this.app = app;
        this.routes();
    }

    routes() {
        return;
    }

}
