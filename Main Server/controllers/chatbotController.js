const dialogflow = require("dialogflow");
const uuid = require("uuid");
const fetch = require("node-fetch");
const HttpsProxyAgent = require('https-proxy-agent');

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
// A unique identifier for the given session
const sessionId = uuid.v4();

// Create a new session
const sessionClient = new dialogflow.SessionsClient();

// List entity types
const entityTypesClient = new dialogflow.EntityTypesClient();

exports.runBot = async (projectId, text, callback) => {
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);
  const agentPath = entityTypesClient.projectAgentPath(projectId);
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: text,
        // The language used by the client (en-US)
        languageCode: "en-US"
      }
    }
  };

  //Get list of entities

  /*const entityRequest = {
    parent: agentPath
  };*/

  const entityRequest = {
    name:
      "projects/umeed-d5fe3/agent/entityTypes/04f21b12-94c4-4114-8901-6a54c260f8ad"
  };

  // Send request and log result
  const responses = await sessionClient
    .detectIntent(request)
    .catch(err => console.log(err));
  const result = responses[0].queryResult;
  let data = [];
  if (result.hasOwnProperty("intent")) {
    if (result.intent.hasOwnProperty("displayName")) {
      if (result.intent.displayName === "ObjectIntent") {
        const entities = await entityTypesClient.getEntityType(entityRequest);
        data = entities[0].entities.map(val => val.value);
      }
      else if(result.intent.displayName === "ObjectIntent - season") {
        await fetch("https://raw.githubusercontent.com/coderwassananmol/Indian-States-And-Districts/master/states-and-districts.json",
        { agent:new HttpsProxyAgent('http://proxy.ssn.net:8080')})
        .then(resp => resp.json())
        .then(resp => {
          data = resp.states.map(item => item.state)
        })
      }
    }
  }
  else {
    // The intent fired is small talk
  }
  //get list of entities
  //const entities = await entityTypesClient.listEntityTypes(entityRequest);
  console.log(data);
  const response = { text: result.fulfillmentText, entities: data };
  callback(response);
  return response;
};
