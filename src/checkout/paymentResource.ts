import { connectToPaymentGateway } from "./fakePaymentApi";

let status = "pending";
let result: unknown;

const suspender = connectToPaymentGateway().then(
  r => {
    status = "success";
    result = r;
  },
  e => {
    status = "error";
    result = e;
  }
);

export function readPayment() {
  if (status === "pending") throw suspender;
  if (status === "error") throw result;
}
