import { Lifecycle, container, injectable, scoped } from "tsyringe";
import { EventProcess } from "./event-process";
import { LoggerService } from "../services/logger-service";

@injectable()
@scoped(Lifecycle.ContainerScoped)
export class EventCallbackStore {
    processes: EventProcess[] = [];

    addEventListener(listenerId: string, eventName: string, method: any): void {
        const logger = container.resolve(LoggerService);

        const process = this.getProcess(listenerId, eventName);
        if (process) {
            // if the process already exists, replace the callback method
            process.method = method;
        } else {
            // else create a new event process
            this.processes.push(new EventProcess(listenerId, eventName, method));
            logger.log(`👂${listenerId} is now listening to ${eventName}`);
        }
    }

    cleanStore(listenerId: string, eventName?: string): void {
        const logger = container.resolve(LoggerService);

        let listenersToRemove = this.processes.filter(x=> x.listenerId === listenerId);
        if (eventName) {
            listenersToRemove = listenersToRemove.filter(x=> x.eventName === eventName);
        }
        logger.group(`❌ Remove ${listenerId} event listners (${listenersToRemove.length})`);
        for (let i = this.processes.length - 1; i >= 0; i--) {
            const p = this.processes[i];
            let eName = eventName ?? p.eventName;
            if (p.listenerId === listenerId && p.eventName === eName) {
                this.processes.splice(i, 1);
                logger.log(`Remove ${p.eventName}`);
            }
        }
        logger.groupEnd();
        logger.group(`Remaining listeners : ${this.processes.length}`);
        this.processes.forEach(p => {
            logger.log(`${p.listenerId} listening to ${p.eventName}`);
        });
        logger.groupEnd();
    }

    private getProcess(listenerId: string, methodName: string): EventProcess | undefined {
        return this.processes.find(x=> x.listenerId === listenerId && x.eventName === methodName);
    }

    getProcesses(eventName: string): EventProcess[] {
        return this.processes.filter(x=> x.eventName === eventName);
    }
}
