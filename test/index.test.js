//#region bow test

const assert = require("assert");
const dropsuit_bow = require("../index.js");

//#region Expected input and outputs

let input = "John likes to watch movies. Mary likes movies too.";
let design_input = "the camel walks through the hot desert";

let inputArray = [
  "John likes to watch movies. Mary likes movies too.",
  "Mary also likes to watch football games.",
];

let ClassicBOW =
  "Bag of Words: Counts the frequency of words in a given input sentence: [1, 2, 1, 1, 2, 1, 1].";

let expected_output_bow_bowb1 = {
  john: 1,
  likes: 2,
  to: 1,
  watch: 1,
  movies: 2,
  mary: 1,
  too: 1,
};

let CorpusBasedFrequencyCount =
  "Corpus Based Frequency Count: Counts the frequency of words in a given input sentence against a corpus of input sentences: [0, 2, 1, 1]";

let expected_val1 = [2, 1, 1, 1, 1];
let expected_bow1 = { a: 2, e: 1, b: 1, c: 1, u: 1 };
let expected_val2 = [0, 2, 1, 1];
let expected_bow2 = { a: 2, b: 1, c: 1 };

let Corpus =
  "Corpus: Counts the frequency of words in a corpus of input sentences: [1, 3, 2, 2, 2, 2, 1, 1, 1, 1].";

let expected_output_bow_bowb3 = {
  john: 1,
  likes: 3,
  to: 2,
  watch: 2,
  movies: 2,
  mary: 2,
  too: 1,
  also: 1,
  football: 1,
  games: 1,
};

let Comparison =
  "Comparison: Counts the frequency of words in one input sentence against another input sentence (optional) [0, 1, 1, 1, 0, 1, 0] or [1, 0, 2, 1, 1, 0, 0].";

let expected_output_bow_bowb4 = { mary: 1, likes: 1, to: 1, watch: 1 };
let expected_output_bow_bowb5 = { likes: 2, to: 1, watch: 1, mary: 1 };

let CorpusComparison =
  "Corpus Comparison: Counts the frequency of words in a corpus of input sentences against one input sentence (optional) [1, 3, 2, 2, 2, 2, 1] or [2, 1, 3, 2, 2, 1, 1].";

let expected_output_bow_bowb6 = {
  john: 1,
  likes: 3,
  to: 2,
  watch: 2,
  movies: 2,
  mary: 2,
  too: 1,
};
let expected_output_bow_bowb7 = {
  likes: 3,
  to: 2,
  watch: 2,
  mary: 2,
  also: 1,
  football: 1,
  games: 1,
};

let bowValues = [1, 2, 1, 1, 2, 1, 1];
let tokenized = ["john", "likes", "to", "watch", "movies", "mary", "too"];

let charFreqVec = {
  j: 1,
  o: 6,
  h: 2,
  n: 1,
  l: 2,
  i: 4,
  k: 2,
  e: 4,
  s: 4,
  t: 3,
  w: 1,
  a: 2,
  c: 1,
  m: 3,
  v: 2,
  r: 1,
  y: 1,
};

let clean_string = "the camel walks through the hot desert";
let string_design_basic = "thecamelwalksthroughhotdesert";
let string_delimiter = "the-camel-walks-through-hot-desert";
let pascal_case = "TheCamelWalksThroughHotDesert";
let pascal_case_delimiter = "The~Camel~Walks~Through~The~Hot~Desert";
let camel_case = "theCamelWalksThroughTheHotDesert";
let camel_case_delimiter = "the @Camel @Walks @Through @Hot @Desert";

//#endregion

describe("dropsuit-bow", () => {
  describe("bow()", () => {
    //#region BOW

    it(ClassicBOW, () => {
      //#region equal input-output
      /**
       * let dsbow = new dropsuit_bow(input, false);
       * let bow_bowb_output1 = dsbow.bow(null).vector();
       * Or:
       * let dsbow = new dropsuit_bow(input, false);
       * let bow_bowb_output1 = dsbow.bow(input).vector();
       */
      //#endregion

      let dsbow1 = new dropsuit_bow(null, true);
      let bow_bowb_output1 = dsbow1.bow(input).vector();
      console.log("\n\nOutput bow():", bow_bowb_output1, "\n\n");
      assert.deepEqual(bow_bowb_output1, expected_output_bow_bowb1);
    });

    /// Count word frequency in a sentence based on the corpus of documents,
    // ignoring non-persistent words and returning zero for unknown words.
    it(CorpusBasedFrequencyCount, () => {
      let inputs = "a e b c u a";
      let vocabularyCorpus = ["x a b c", "a b c x", "c a x b x"];
      // BOW
      let dsbow1 = new dropsuit_bow(null, false);
      let val1 = dsbow1.bow(inputs).values();
      let bow1 = dsbow1.bow(inputs).vector();
      // Corpus Based Frequency Count
      let dsbow2 = new dropsuit_bow(vocabularyCorpus, false);
      let val2 = dsbow2.bow(inputs).values();
      let bow2 = dsbow2.bow(inputs).vector();
      //#region console log
      console.log(
        "\n\nOutput Bag of Words .bow(inputs).values():",
        val1,
        "\n.bow(inputs).vector():",
        bow1,
        "\nOutput Corpus-Based-Frequency-Count .bow(inputs).values():",
        val2,
        "\n.bow(inputs).vector():",
        bow2
      );
      //#endregion

      assert.deepEqual(val1, expected_val1);
      assert.deepEqual(bow1, expected_bow1);
      assert.deepEqual(val2, expected_val2);
      assert.deepEqual(bow2, expected_bow2);
    });

    it(Corpus, () => {
      //#region equal input-output
      /**
       * Same result:
       * let dsbow = new dropsuit_bow(inputArray, false);
       * let bow_bowb_output4 = dsbow.bow(null).vector();
       * or:
       * let dsbow = new dropsuit_bow(inputArray, false);
       * let bow_bowb_output9 = dsbow.bow(inputArray).vector();
       */
      //#endregion

      let dsbow3 = new dropsuit_bow(null, false);
      let bow_bowb_output3 = dsbow3.bow(inputArray).vector();
      console.log("\n\nOutput bow():", bow_bowb_output3, "\n\n");
      assert.deepEqual(bow_bowb_output3, expected_output_bow_bowb3);
    });

    it(Comparison, () => {
      let dsbow4 = new dropsuit_bow(input, false);
      let bow_bowb_output4 = dsbow4.bow(inputArray[1]).vector();
      console.log("\n\nOutput bow():", bow_bowb_output4, "\n\n");
      assert.deepEqual(bow_bowb_output4, expected_output_bow_bowb4);

      let dsbow5 = new dropsuit_bow(inputArray[1], false);
      let bow_bowb_output5 = dsbow5.bow(input).vector();
      console.log("\n\nOutput bow():", bow_bowb_output5, "\n\n");
      assert.deepEqual(bow_bowb_output5, expected_output_bow_bowb5);
    });

    it(CorpusComparison, () => {
      let dsbow6 = new dropsuit_bow(input, false);
      let bow_bowb_output6 = dsbow6.bow(inputArray).vector();
      console.log("\n\nOutput bow():", bow_bowb_output6, "\n\n");
      assert.deepEqual(bow_bowb_output6, expected_output_bow_bowb6);

      let dsbow7 = new dropsuit_bow(inputArray[1], false);
      let bow_bowb_output7 = dsbow7.bow(inputArray).vector();
      console.log("\n\nOutput bow():", bow_bowb_output7, "\n\n");
      assert.deepEqual(bow_bowb_output7, expected_output_bow_bowb7);
    });

    //#endregion

    //#region Character frequency vector

    it("Character frequency vector", () => {
      let cfvc = new dropsuit_bow(null, false);
      let cfv = cfvc.bow(input).chars();
      let val = cfvc.bow(input).values();
      let tok = cfvc.bow(input).tokens();

      //#region console log

      console.log(
        "\n\nOutput bow().chars():",
        cfv,
        "\nOutput bow().values():",
        val,
        "\nOutput bow().tokens():",
        tok,
        "\n"
      );

      //#endregion

      assert.deepEqual(cfv, charFreqVec);
      assert.deepEqual(val, bowValues);
      assert.deepEqual(tok, tokenized);
      console.log(tok);
    });

    //#endregion

    //#region Design options

    it("String design case and delimiter options", () => {
      let dsbdes = new dropsuit_bow(null, false);
      let output1 = dsbdes.bow(design_input).design();
      let output2 = dsbdes.bow(design_input).design(""); /// Equal result: // .design("-"); // .design("", ""); // .design("xpkd", "ztfp")
      let output3 = dsbdes.bow(design_input).design("", "-");
      let output4 = dsbdes.bow(design_input).design("pascal-"); /// Equal result: // .design("pascal", "");
      let output5 = dsbdes.bow(design_input).design("pascal", "~");
      let output6 = dsbdes.bow(design_input).design("camel"); // .design("camel", "");
      let output7 = dsbdes.bow(design_input).design("camel-", " @");

      //#region design examples log
      console.log(
        "\n\nOutput bow().design():",
        output1,
        "\nOutput bow().design(''):",
        output2,
        "\nOutput bow().design('', '-'):",
        output3,
        "\nOutput bow().design('pascal-'):",
        output4,
        "\nOutput bow().design('pascal', '~'):",
        output5,
        "\nOutput bow().design('camel'):",
        output6,
        "\nOutput bow().design('camel-', ' @'):",
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

    //#endregion
  });
});

//#endregion
