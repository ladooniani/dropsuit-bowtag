//#region bow test

const assert = require("assert");
const dropsuit_bow = require("../index.js");

//#region Expected input and outputs

let clean_string = "the camel walks through the hot desert";
let string_design_basic = "thecamelwalksthroughhotdesert";
let string_delimiter = "the-camel-walks-through-hot-desert";
let pascal_case = "TheCamelWalksThroughHotDesert";
let pascal_case_delimiter = "The~Camel~Walks~Through~The~Hot~Desert";
let camel_case = "theCamelWalksThroughTheHotDesert";
let camel_case_delimiter = "the @Camel @Walks @Through @Hot @Desert";

//#endregion

describe("dropsuit-bow", () => {
  describe("decor()", () => {
    it("String design case and delimiter options", () => {
      let dsbdes = new dropsuit_bow(null, false);
      let output1 = dsbdes.decor(design_input).design();
      let output2 = dsbdes.decor(design_input).design(""); /// Equal result: // .design("-"); // .design("", ""); // .design("xpkd", "ztfp")
      let output3 = dsbdes.decor(design_input).design("", "-");
      let output4 = dsbdes.decor(design_input).design("pascal-"); /// Equal result: // .design("pascal", "");
      let output5 = dsbdes.decor(design_input).design("pascal", "~");
      let output6 = dsbdes.decor(design_input).design("camel"); // .design("camel", "");
      let output7 = dsbdes.decor(design_input).design("camel-", " @");

      //#region design examples log
      console.log(
        "\n\nOutput decor().design():",
        output1,
        "\nOutput decor().design(''):",
        output2,
        "\nOutput decor().design('', '-'):",
        output3,
        "\nOutput decor().design('pascal-'):",
        output4,
        "\nOutput decor().design('pascal', '~'):",
        output5,
        "\nOutput decor().design('camel'):",
        output6,
        "\nOutput decor().design('camel-', ' @'):",
        output7
      );
      //#endregion

      assert.deepEqual(output1, clean_string);
      assert.deepEqual(output2, string_design_basic);
      assert.deepEqual(output3, string_delimiter);
      assert.deepEqual(output4, pascal_case);
      assert.deepEqual(output5, pascal_case_delimiter);
      assert.deepEqual(output6, camel_case);
      assert.deepEqual(output7, camel_case_delimiter);
    });

  
  });
});

//#endregion
