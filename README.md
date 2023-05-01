[<img alt="TAI Lab." width="59px" src="https://github.com/ladooniani/Terbinari-CBM-Robot/blob/main/images/dropsuit.png" />](https://github.com/ladooniani/dropsuit#readme)
<!--
[![npm version](https://img.shields.io/npm/v/dropsuit-decor.svg?style=flat)](https://www.npmjs.com/package/dropsuit-decor) [![npm](https://img.shields.io/npm/dt/dropsuit-decor.svg?style=flat-square)](https://www.npmjs.com/package/dropsuit-decor) [![License](https://img.shields.io/npm/l/dropsuit-decor.svg)](https://www.npmjs.com/package/dropsuit-decor)
-->
# DropSuit NLP: Decor Function for Formatting and Styling Text Strings

[DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP is an open-source JavaScript and Node.js library that provides various functions for natural language processing and data manipulation. The decor function is one of the library's modules and is used for formatting and styling text strings. The decor function is open-source and available under the Apache License 2.0.

### Installation

Add the library function by installing it via npm:

```
npm install dropsuit-decor
```

### Usage

Import the library in your project:

```
const dropsuit_decor = require("dropsuit-decor");

```

If you want to see the processing results in the terminal, you can set the second argument to true when creating the instance, like this:

```
let dsdecor = new dropsuit_decor(false);
```

#### decor(input: string|array)

- **input**: Input sentence string.

#### Return option:

- **design(type, delimiter)** Returns 'pascal' and 'camel' case with delimiter.
- **tokens()** Returns an array of processed tokens.

## Design option

The design(type, delimiter) option in the bow() function returns the output strings in pascal or camel case with the specified delimiter. The type parameter can be either "pascal" or "camel". The delimiter parameter is optional and can be any string. If not provided, the default delimiter is an empty string. Here's an example usage:

```
let input = "The camel walks through the hot desert";
let dsbdes = new dropsuit_bow(null, false);

```

Then, we can use the design function to generate different string representations, like this:

```
// Default (no arguments) returns a space separated string
let output1 = dsbdes.bow(input).design(); // the camel walks through the hot desert

// Empty delimiter returns a string without spaces
let output2 = dsbdes.bow(input).design(""); // thecamelwalksthroughhotdesert

// Delimiter "-" returns a hyphen separated string in kebab case
let output3 = dsbdes.bow(input).design("", "-"); // the-camel-walks-through-hot-desert

// Pascal case with no delimiter and 'pascal-' minus '-' property to remove duplicates
let output4 = dsbdes.bow(input).design("pascal-"); // TheCamelWalksThroughHotDesert

// Pascal case with delimiter "~"
let output5 = dsbdes.bow(input).design("pascal", "~"); // The~Camel~Walks~Through~The~Hot~Desert

// Camel case with no delimiter
let output6 = dsbdes.bow(input).design("camel"); // theCamelWalksThroughTheHotDesert

// Camel case with delimiter " @"  and 'camel-' minus '-' property to remove duplicates
let output7 = dsbdes.bow(input).design("camel-", " @"); // the @Camel @Walks @Through @Hot @Desert

```
<!--
## Links

- npm: https://www.npmjs.com/package/dropsuit-decor
-->
## Supporting DropSuit

DropSuit is an open-source library and I am dedicated to ensuring its continued development and improvement. If you have any questions, feedback, or encounter any issues, please reach out through the [support via PayPal](https://www.paypal.com/paypalme/dropsuit?country.x=GE&locale.x=en_US), and read more about [support details](https://github.com/ladooniani/dropsuit/blob/main/Support.md).

Your support is crucial for the library's success. You can also contribute to the project by submitting bug reports, feature requests, or by providing feedback. Sharing the library with others who may find it useful and giving it a star on GitHub are also great ways to show your support. Thank you for using DropSuit!

## License

[Apache License 2.0](LICENSE.txt)
