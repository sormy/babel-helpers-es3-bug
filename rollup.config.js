import babel from "rollup-plugin-babel"

export default [
  {
    input: "test.js",
    plugins: [
      babel(),
    ],
    external: () => true,
    output: {
      file: `test.out.rollup.js`,
      format: "iife",
      compact: false,
      freeze: false,
      name: "FulfillmentHIGComponents"
    }
  }
]
