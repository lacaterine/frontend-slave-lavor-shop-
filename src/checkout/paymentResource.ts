import { connectToPaymentGateway } from "./fakePaymentApi";

export function createPaymentResource(t: (key: string) => string) {
  let status: "pending" | "success" | "error" = "pending";
  let result: unknown;

  const suspender = connectToPaymentGateway(t).then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    },
  };
}
