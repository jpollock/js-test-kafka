import akkaserverless from "@lightbend/akkaserverless-javascript-sdk";
const View = akkaserverless.View;



const entity = new View(
  ["document_api.proto"],
  "com.lightbend.demos.DocumentQueryService",
  {
    viewId: "documents",
    includeDirs: ["./proto"]
  }
);
const SetValue = entity.lookupType("com.lightbend.demos.SetValue");

entity.setUpdateHandlers({
    "UpdateDocument": updateDocument
});

function updateDocument(event, previousViewState, ctx) {
    return SetValue.create({tenant: "1",key: "1", value: event});
}


export default entity;
