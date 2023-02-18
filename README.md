[<img alt="TAI Lab." width="59px" src="https://github.com/ladooniani/tailab/blob/master/assets/tai_lab_terbinari_cbm_project_logo.png" />](https://github.com/ladooniani/dropsuit#readme)

[![npm version](https://img.shields.io/npm/v/dropsuit-bowtag.svg?style=flat)](https://www.npmjs.com/package/dropsuit-bowtag) [![npm](https://img.shields.io/npm/dt/dropsuit-bowtag.svg?style=flat-square)](https://www.npmjs.com/package/dropsuit-bowtag) [![License](https://img.shields.io/npm/l/dropsuit-bowtag.svg)](https://www.npmjs.com/package/dropsuit-bowtag)

# Overview of [DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP and the bowtag Function

[DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP is an open-source JavaScript and Node.js library offering diverse functions for natural language processing and data manipulation. The bowtag function is one of its modules, designed for generating a bag of words from input and data structure intent tags. It is available under the Apache License 2.0.

## DropSuit NLP Method: A JavaScript and Node.js function for generating a bag of words from input and data structure intent tags

The bowtag function is a part of the DropSuit NLP library, it's a JavaScript and Node.js function that generates a bag of words from input and data structure intent tags. It accepts a boolean parameter to enable or disable stemming. It's open-source and available under the Apache License 2.0.

### Installation

Add the library function by installing it via npm:

```
npm install dropsuit-bowtag
```

### Usage

Import the library in your project:

```
const dropsuit_bowtag = require("dropsuit-bowtag");

```

Process [intents.json](https://github.com/ladooniani/dropsuit-bowtag/blob/main/test/intents.json) using 'jsonIntStrct' function:

```
const json_data = require("dropsuit-bowtag/jsobj.js");
let intentData = json_data.jsonIntStrct("assets/json/intents.json");
```

Set boolean parameter (true/false) argument value to display console log processing results output information in terminal:

```
let dsbowtag = new dropsuit_bowtag(intentData.req_arr, intentData.tag_arr, intentData.res_arr, false);
```

#### bowtag(boolean)

- **array**: Processes default object instance json key value _(req_arr: requests)_, _(tag_arr: tags)_ array patterns.
- **boolean**: (true/false) Enable or disable stemming.

#### Return option:

- **tagsbt()** Bag of words.
- **bowtbt()** Tags IDx value sequence arrays.

```
let out = dsbowtag.bowtag(false);
console.log(out);
```

Return object instance:

```
Output:

 {
  size_bt: 6,
  bow_bt: [
    [
      2, 1, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0
    ],
    [
      0, 0, 2, 1, 1, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0
    ],
    [
      0, 0, 0, 0, 0, 1, 1,
      2, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0
    ],
    [
      0, 0, 0, 0, 1, 0, 0,
      0, 1, 2, 1, 1, 1, 0,
      0, 0, 0, 0
    ],
    [
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 2,
      1, 1, 0, 0
    ],
    [
      0, 0, 0, 0, 1, 0, 0,
      0, 0, 0, 0, 0, 0, 1,
      0, 0, 1, 1
    ]
  ],
  tag_bt: [ 0, 0, 1, 1, 2, 2 ],
  bowtbt: [Function: bowtbt],
  tagsbt: [Function: tagsbt]
}
```

## Links

- npm: https://www.npmjs.com/package/dropsuit-bowtag

## Supporting DropSuit

DropSuit is an open-source library and I am dedicated to ensuring its continued development and improvement. If you have any questions, feedback, or encounter any issues, please reach out through the [support via PayPal](https://www.paypal.com/paypalme/dropsuit?country.x=GE&locale.x=en_US), and read more about [support details](https://github.com/ladooniani/dropsuit/blob/main/Support.md).

Your support is crucial for the library's success. You can also contribute to the project by submitting bug reports, feature requests, or by providing feedback. Sharing the library with others who may find it useful and giving it a star on GitHub are also great ways to show your support. Thank you for using DropSuit!

## License

[Apache License 2.0](LICENSE.txt)