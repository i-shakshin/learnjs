class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
    console.log(options);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
