# getCSSRules
Get all the css rules from a class or id or all rules that apply to an element.

It's nice and clean output it, could be used for debugging purposes, by sending to server etc.

<pre>
var element = document.getElementById("test");

element.id = "test_id";
element.classList.add("class_one class_two");

var a = element.getCSSRules("class_two"); /* class_two only class_one is skipped */
var b = element.getCSSRules(null, "test_id"); /* id only */
var c = element.getCSSRules(); /* all rules included cascaded */

</pre>
