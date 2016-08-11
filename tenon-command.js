'use strict';

var config = {
  key: '7ac2c9adc71ac32d7c773e25e969e7b7',
  projectID: 'replaceme',
  endpoint: 'https://tenon.io/api/',
};

Selenium.prototype.getAccessibilityIssues = function(locator) {
  var element = this.page().findElement(locator);
  var src = element.outerHTML;
  var xhttp = new XMLHttpRequest();
  var url = config.endpoint;
  var params = ('key=' + encodeURIComponent(config.key) +
                '&src=' + encodeURIComponent(src) +
                '&projectID=' + encodeURIComponent(config.projectID));
  // alert('sending params' + params);
  var result = -1;
  xhttp.onreadystatechange = function() {
    console.log(xhttp.status, xhttp);
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      var resp = JSON.parse(xhttp.responseText);
      var issues = resp.resultSummary.issues.totalIssues;
      // alert('got issues: ' + issues);
      result = issues;
    }
  };
  xhttp.open('POST', url, false);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.send(params);
  return result;
};
