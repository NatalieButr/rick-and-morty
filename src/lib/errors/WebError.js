class WebError extends Error {
  constructor({ code, message, status }) {
    super();

    this.code = code;
    this.status = status;
    this.message = message;
  }
}

export default WebError;
