export class Client {
  constructor () {
    const previousHandler = ErrorUtils.getGlobalHandler()
    ErrorUtils.setGlobalHandler((error, isFatal) => {
      console.warn("Bugsnag Test App - Entering error handler");
    })
  }
}

const handler = new Client();
export default handler;
