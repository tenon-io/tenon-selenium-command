Selenium.prototype.tenonTest = function(locator) {
    /**
     * Sets the value of an input field to a random email id,
     * as though you typed it in.
     *
     * @param locator an <a href="#locators">element locator</a>
     */

    // All locator-strategies are automatically handled by "findElement"
    var element = this.page().findElement(locator);

	//stringify the DOM node


	var http = new XMLHttpRequest();
	var url = 'get.php';
	var params = 'lorem=ipsum&name=binny';
	http.open('POST', url, true);

	//Send the proper header information along with the request
	http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	http.onreadystatechange = function() {//Call a function when the state changes.
	    if(http.readyState === 4 && http.status === 200) {
	        alert(http.responseText);
	    }
	};
	http.send(params);
};
