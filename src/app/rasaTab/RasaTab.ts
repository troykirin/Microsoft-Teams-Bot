import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/rasaTab/index.html")
@PreventIframe("/rasaTab/config.html")
@PreventIframe("/rasaTab/remove.html")
export class RasaTab {
}
