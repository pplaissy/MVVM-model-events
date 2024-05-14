import { Lifecycle, injectable, scoped } from "tsyringe";

@injectable()
@scoped(Lifecycle.ContainerScoped)
export class LoggerService {
  /**
   * Jamais utilisé en environnement de production
   */
  group(msg: any) {
    if (this.loggable(false)) {
      console.groupCollapsed(msg);
    }
  }

  /**
   * Jamais utilisé en environnement de production
   */
  groupEnd() {
    if (this.loggable(false)) {
      console.groupEnd();
    }
  }

  /**
   * Affiche un message d'information dans la console
   * @param msg Le message à afficher dans la console
   * @param forceInProd true si on veut que le message soit affiché en environnement de production. false par défaut
   */
  log(msg: any, forceInProd: boolean = false) {
    if (this.loggable(forceInProd)) {
      console.log(msg);
    }
  }

  /**
   * Affiche un message d'erreur dans la console
   * @param msg Le message à afficher dans la console
   * @param forceInProd true si on veut que le message soit affiché en environnement de production. Par défaut les messages d'erreur sont toujours affichés
   */
  error(msg: any, forceInProd: boolean = true) {
    if (this.loggable(forceInProd)) {
      console.error(msg);
    }
  }

  /**
   * Affiche un message d'avertissement dans la console
   * @param msg Le message à afficher dans la console
   * @param forceInProd true si on veut que le message soit affiché en environnement de production. false par défaut
   */
  warn(msg: any, forceInProd: boolean = false) {
    if (this.loggable(forceInProd)) {
      console.warn(msg);
    }
  }

  /**
   * Affiche un message d'erreur lié aux listeners. N'est pas affiché en environnement de production
   * @param msg Le message à afficher dans la console
   */
  missingListener(msg: any) {
    this.error(`${msg} n'est pas écouté`, false);
  }


  private loggable(forceInProd: boolean): boolean {
    // in real case should be something like 'return forceInProd || !environment.production;'
    return true;
  }
}
