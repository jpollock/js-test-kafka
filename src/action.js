import akkaserverless from "@lightbend/akkaserverless-javascript-sdk";
const Action = akkaserverless.Action;
const replies = akkaserverless.replies;


const action = new Action(
    [
      "document_api.proto"
    ],
    "com.lightbend.demos.DocumentActionService",
    {
      includeDirs: ["./proto"]
    }
  );
  
const Any = action.lookupType("google.protobuf.Any");

action.commandHandlers = {Set: set};

function set(command, ctx) {
  return replies.message(command);
}


export default action;