/* Code Edited By David Clews */

/*
 * getCSSRules
 * 
 * Modified source code from http://jsfiddle.net/HP326/6/
 * 
 * @param {string} [a] If set only return the rules for this class selector
 * @param {string} [d] If set only return the rules for this id selector
 * 
 * @returns {array} An Array of the rules as strings
 */
Element.prototype.getCSSRules = function(a = null, b = null){
    let c = document.styleSheets, o = [];
    this.matches = this.matches || this.webkitMatchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector;
    for (var i in c) {
        let d = c[i].rules || c[i].cssRules;
        for (var r in d) {
            if (this.matches(d[r].selectorText)) {
                
                /* detect only class rules */
                if(a !== null || b !== null){
                    if(a !== null && d[r].selectorText === "."+a){
                        o.push(d[r].cssText);
                    }

                    /* detect only id rules */
                    if(b !== null && d[r].selectorText === "#"+b){
                        o.push(d[r].cssText);
                    }
                }else{
                    /* return all */
                    o.push(d[r].cssText);
                }
            }
        }
    }
    
    return o;
}
