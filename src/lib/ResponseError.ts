class ResponseError extends Error {
  statusCode: number;

  constructor(statusCode: number, error: string) {
    super(error);

    this.statusCode = statusCode;
    Object.setPrototypeOf(this, ResponseError.prototype);
  }

  toString() {
    return `${this.statusCode} | ${this.message}`;
  }
}

export default ResponseError;
