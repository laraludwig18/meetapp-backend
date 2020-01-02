class BadRequestError extends Error {
  constructor(message) {
    super(message);

    this.name = this.constructor.name;
    this.status = 400;
  }
}

export default BadRequestError;