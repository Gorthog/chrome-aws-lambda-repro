import * as assert from "assert";
import * as sinon from "sinon";
import * as uuid from "uuid";
import { finalPrice as helloHttp } from "../src/index";
import "mocha";

it("helloHttp: should print a name", () => {
  // Mock ExpressJS 'req' and 'res' parameters
  const name = uuid.v4();
  const req = {
    body: {
      name: name
    }
  };
  const res = { send: sinon.stub() };

  // Call tested function
  helloHttp(req, res);

  // Verify behavior of tested function
  assert.ok(res.send.calledOnce);
  assert.deepStrictEqual(res.send.firstCall.args, [`Hello ${name}!`]);
});

it("helloHttp: should print hello world", () => {
  // Mock ExpressJS 'req' and 'res' parameters
  const req = {
    body: {}
  };
  const res = { send: sinon.stub() };

  // Call tested function
  helloHttp(req, res);

  // Verify behavior of tested function
  assert.ok(res.send.calledOnce);
  assert.deepStrictEqual(res.send.firstCall.args, ["Hello World!"]);
});
