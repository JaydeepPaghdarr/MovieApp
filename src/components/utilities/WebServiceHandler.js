import { customAlert } from "./CommonMethods";
/**
 *
 * @param {*} obj scope of the class from where it is called.
 * @param {*} endpoint API endpoint.
 * @param {*} data Body if data is to be sent.
 * @param {*} returnMethod callback to main component.
 * @param {*} type Method i.e. POST,GET,DELETE etc.
 */

export async function callRemoteMethod(obj, endpoint, data, returnMethod, type = "GET") {
  var request = {
    method: type,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  if (type != "GET") {
    request.body = JSON.stringify(data);
  }

  await fetch(endpoint, request)
    .then(response => response.json())
    .then(responseJson => {
      eval("obj." + returnMethod + "(responseJson)");
    })
    .catch(error => {
      setTimeout(() => {
        customAlert(error.message);
      }, 500);
    });
}
