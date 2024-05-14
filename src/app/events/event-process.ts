export class EventProcess {
    listenerId: string;
    method: (arg1?: any) => Promise<any>;
    eventName: string;

    constructor(listenerId: string, methodName: string, method: any) {
        this.listenerId = listenerId;
        this.eventName = methodName;
        this.method = method;
    }
}