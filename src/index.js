/* This code was initialised by Akka Serverless tooling.
 * As long as this file exists it will not be re-generated.
 * You are free to make changes to this file.
 */

import { AkkaServerless } from "@lightbend/akkaserverless-javascript-sdk";
import action from "./action.js";
import view from "./view.js";

const server = new AkkaServerless();
server.addComponent(action);
server.addComponent(view);

server.start();