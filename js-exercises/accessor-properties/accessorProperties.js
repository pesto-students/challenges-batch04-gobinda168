const accessorProperties = () => ({
  binary: null,
  get number() {
    return this.binary;
  },
  set number(value) {
    this.binary = Number(parseInt(value, 10).toString(2));
  },
});
export { accessorProperties };
