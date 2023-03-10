//#region Info

/**
 * @file <h3>DropSuit</h3>
 * <p>
 *   DropSuit is a JavaScript(ES6) and Node.js(v14.x) module library
 *   created by Lado Oniani that offers a diverse collection of functions
 *   for natural language processing (NLP) and data manipulation.
 *   It provides a curated collection of original and classic techniques and methods
 *   for tasks such as text analysis, language understanding and generation,
 *   as well as for data manipulation tasks. Additionally,
 *   it includes unique tools and features for chatbot dialog flow logic
 *   and other specific use cases.
 *   The library is open-source and available under the Apache License 2.0.
 *   Whether you're a researcher, developer, or data scientist,
 *   DropSuit offers a range of tools to enhance your work,
 *   with a focus on diversity and experimentation.
 * </p>
 * @author Lado Oniani
 * {@link https://github.com/ladooniani GitHub}
 * @see mailto:ladooniani@gmail.com
 * @version 1.0.0
 * @see https://github.com/ladooniani/DropSuit#readme
 * @copyright 2016-2023 Lado Oniani - DropSuit. All Rights Reserved.
 * @license Apache License 2.0
 */

//#endregion

//#region  Constructor

function Constructor(dsout) {
  this.dsout = dsout;
}

//#endregion

//#region decor

/**
 * Formatting and Styling Text Strings
 * @constructor
 * @param {string|null} [input=null] - The input sentence or word to be processed.
 * Leave as `null` to use the default input specified in the constructor.
 * @returns {object} - Formatting and Styling Text Strings
 */

Constructor.prototype.decor = function (inputData) {
  let out = decor_f(inputData, this.dsout);
  return out;
};

//#endregion

//#region decor_f

const dropsuit_clnstr = require("../dropsuit-clnstr/index.js");
var ds_clnstr = new dropsuit_clnstr(null, false);

const dropsuit_tok = require("../dropsuit-tok/index.js");
let dstok = new dropsuit_tok(null, false);

/**
 * Constructs a Formatting and Styling Text Strings
 * @function
 * @constructor
 * @description Formatting and Styling Text Strings.
 * @param {string|null} [inputsent=null] - Optional input sentence or word to be processed.
 * @param {boolean} [dispout=false] - Display processing output results in the terminal.
 * @returns {object} - A BOW object with a bag of words and accessory options.
 * @example
 * const bow = new bow(inputsent, dispout);
 */

function decor_f(inputsent, dispout) {
  if (inputsent != null) {
    inputsent = ds_clnstr.clnstr(inputsent).txt();
    var tokenWords = dstok.tok(inputsent, 0).tokArr();
    let design = bowsObj(tokenWords, inputsent);
    display(design, dispout); /// DISPLAY >>
    return design;
  }
}

function bowsObj(tokenWords, inputsent) {
  const bowobj = {
    tokenized: tokenWords,

    tokens: function () {
      return this.tokenized;
    },
    design: function (type, delimiter) {
      return designTypes(type, delimiter, tokenWords, inputsent);
    },
  };
  return bowobj;
}

function designTypes(type, delimiter, tokenWords, inputsent) {
  inputsent = inputsent.split(" ");
  if (type == undefined) {
    inputsent = dstok.tok(inputsent, 0).tokStr();
     return inputsent;
  } else {
    if (type != "") {
      type = ds_clnstr.clnstr(type).pnc();
    }
    if (type == "camel-") {
      return camel(tokenWords, delimiter);
    } else if (type == "pascal-") {
      return pascal(tokenWords, delimiter);
    } else if (type == "camel") {
      return camel(inputsent, delimiter);
    } else if (type == "pascal") {
      return pascal(inputsent, delimiter);
    } else if (type == "") {
      return set(tokenWords, delimiter);
    } else {
      inputsent = dstok.tok(inputsent, 0).tokStr();
       return inputsent;
    }
  }
}

function set(tokenWords, delimiter) {
  let desDtr = tokenWords[0];
  if (delimiter === undefined) {
    delimiter = "";
  }
  for (let i = 1; i < tokenWords.length; i++) {
    desDtr = desDtr + delimiter + tokenWords[i];
  }
  return desDtr;
}

function camel(tokenWords, delimiter) {
  let desDtr;
  desDtr = tokenWords[0];
  desDtr = build(tokenWords, desDtr, delimiter);
  return desDtr;
}

function pascal(tokenWords, delimiter) {
  let desDtr;
  desDtr = capitalize(tokenWords[0]);
  desDtr = build(tokenWords, desDtr, delimiter);
  return desDtr;
}

function build(tokenWords, desDtr, delimiter) {
  if (delimiter === undefined) {
    delimiter = "";
  }
  for (let i = 1; i < tokenWords.length; i++) {
    desDtr = desDtr + delimiter + capitalize(tokenWords[i]);
  }
  return desDtr;
}

function capitalize(input) {
  const output = input.charAt(0).toUpperCase() + input.slice(1);
  return output;
}

//#endregion

//#region console log

const getdt = require("./infodt.js");
let fnctit = getdt.displayInfoData();
const line = fnctit.line;
var description = fnctit.descript;
function display(design, dispout) {
  if (dispout == true) {
    console.log(description, "\n", design, "\n", line);
  }
}

//#endregion

//#region Export Module Constructor

module.exports = Constructor;

//#endregion
