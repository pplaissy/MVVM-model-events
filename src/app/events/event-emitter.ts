import { container } from "tsyringe";
import { EventCallbackStore } from "./event-callback-store";
import { EventProcess } from "./event-process";
import { LoggerService } from "../services/logger-service";

export abstract class EventEmitter {
    async emitEventAsync(eventName: string, arg1?: any): Promise<any> {
        const logger = container.resolve(LoggerService);
        const ps = container.resolve(EventCallbackStore);
        const processes = ps.getProcesses(eventName);
        if (processes.length === 0) {
            logger.error(`${eventName} n'était pas écouté`);
            return undefined;
        }
        if (processes.length > 1) {
            logger.group(`event was received by (${processes.length}) listeners`)
            processes.forEach(p => {
                logger.log(`${p.listenerId} is listening to ${p.eventName}`);
            });
            logger.groupEnd();
        }

        // emitter only can receive return value when there is a single listener
        if (processes.length === 1) {
            const p = processes[0];
            return await this.executeProcess(p, arg1);
        }

        processes.forEach(async p => {
            await this.executeProcess(p, arg1);
        });
    }

    private async executeProcess(p: EventProcess, arg?: any): Promise<any> {
        if (arg !== undefined) {
            return await p.method(arg);
        }
        return await p.method();
}
}