import { Lifecycle, injectable, scoped } from "tsyringe";

@injectable()
@scoped(Lifecycle.ContainerScoped)
export class LoggerService {
  /**
   * Never used in prod context
   */
  group(msg: any) {
    if (this.loggable(false)) {
      console.groupCollapsed(msg);
    }
  }

  /**
   * Never used in prod context
   */
  groupEnd() {
    if (this.loggable(false)) {
      console.groupEnd();
    }
  }

  /**
   * Display an information message in the console
   * @param msg The message to display
   * @param forceInProd true if we want the message to be displayed in prod context. false by default
   */
  log(msg: any, forceInProd: boolean = false) {
    if (this.loggable(forceInProd)) {
      console.log(msg);
    }
  }

  /**
   * Display an information message in the console
   * @param msg The message to display
   * @param forceInProd true if we want the message to be displayed in prod context. false by default
   */
  error(msg: any, forceInProd: boolean = true) {
    if (this.loggable(forceInProd)) {
      console.error(msg);
    }
  }

  /**
   * Display an information message in the console
   * @param msg The message to display
   * @param forceInProd true if we want the message to be displayed in prod context. false by default
   */
  warn(msg: any, forceInProd: boolean = false) {
    if (this.loggable(forceInProd)) {
      console.warn(msg);
    }
  }

  /**
   * Display an error message relative to listeners. Not displayed in prod context
   * @param msg The message to display
   */
  missingListener(msg: any) {
    this.error(`${msg} n'est pas écouté`, false);
  }


  private loggable(forceInProd: boolean): boolean {
    // in real case should be something like 'return forceInProd || !environment.production;'
    return true;
  }
}
