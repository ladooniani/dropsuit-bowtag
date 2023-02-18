//#region bowtag test

const dropsuit_bowtag = require("../index.js");
const json_data = require("../jsobj.js");
const localFile = "./test/intents.json";

describe("dropsuit-bowtag", () => {
  it("Processing intents to bag of words and tags array", () => {
    let intentData = json_data.jsonIntStrct(localFile);
    let dsbowtag = new dropsuit_bowtag(
      intentData.req_arr,
      intentData.tag_arr,
      intentData.res_arr,
      true
    );
    let bowtag_output_tags = dsbowtag.bowtag(false).tagsbt();
    let bowtag_output_bow = dsbowtag.bowtag(false).bowtbt();
    // console.log("\n\ntags output:", bowtag_output_tags);
    // console.log("\n\nbow output:", bowtag_output_bow);
  });
});

//#endregion
