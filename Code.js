// Init function
function doGet() {
  var page = HtmlService.createTemplateFromFile('index').evaluate();
  return page;
}

// Get files for templating
function getContent(filename) {
  var val = HtmlService.createTemplateFromFile(filename).getRawContent();
  return val;
}