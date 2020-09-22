import { Observable } from "@nativescript/core";
import { requestPremissions, setBadge, removeBadge } from "nativescript-plugin-badge";

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();

    requestPremissions();
  }

  public setBadgeTo5() {
    setBadge(5);
  }

  public removeBadge() {
    removeBadge();
  }
}
