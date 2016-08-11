#README


The Selenium IDE is a tool to simplify the process of generating Selenium tests. It has a number of built in actions, accessors and assertions. This custom extension allows you to add a custom assertion that calls the Tenon API to check for accessibility issues.

The `getAccessibilityIssues` method receives a DOM locator, finds the appropriate element, and calls the Tenon API with it’s source code. 

The method returns the `resultSummary.issues.totalIssues` field of the API's response. You can use this as part of an assertion within the Selenium IDE.

# Installation
You must have a Tenon.io API key to use this. If you are not already a Tenon.io user, register at: https://tenon.io/register.php

Then, learn how to get your API Key at:
https://tenon.io/documentation/videos/09-api-key.php

## Download

## Configure the script
At the top of `tenon-command.js` is a config object that you will need to modify:

```
var config = {
  key: 'PUT YOUR API KEY HERE',
  projectID: 'PUT YOUR PROJECT ID HERE',
  endpoint: 'https://tenon.io/api/',
};
```


## Use within Selenium IDE
coming soon.
