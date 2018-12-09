module.exports = {
  extends: [
    'airbnb-base',
  ],
  rules: {
    // always requires parens around arrow function params
    'arrow-parens': ['error', 'always'],

    // always requires arrow function bodies {}
    'arrow-body-style': ['error', 'always'],

    // allow variables that begin with _
    'no-underscore-dangle': 'off',

    // this allows you to overwrite values on an object passed to a function as
    //  a parameter
    //
    // airbnb has this disabled except for certain variable names ($scope,
    //  request, e, ...)
    'no-param-reassign': ['error', { 'props': false }],

    'no-console': 'off',
  },
}
