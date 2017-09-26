var linkBox1 = document.getElementById('linkbox-1');
var linkBox2 = document.getElementById('linkbox-2');


function getChildren(linkBox) {
    var children = linkBox.children;
    return children;
}

function getChildHeight(array) {
    var height = [];
    for (var i = 0; i < array.length; i++) {
        height[i] = array[i].offsetHeight;
    }

    return height;
}


function orderArrayOnHeight(htmlElementsInArray) {
    var height = getChildHeight(htmlElementsInArray);

    for (var x = 0; x < htmlElementsInArray.length -1; x++) {
        for (var i = 0; i < htmlElementsInArray.length -1; i++) {
            ii = i+1;

            if (height[i] <= height[ii]) {

                var c = height[i];
                height[i] = height[ii];
                height[ii] = c;


                // console.log(height)

                var c = htmlElementsInArray[i];
                htmlElementsInArray[i] = htmlElementsInArray[ii];
                htmlElementsInArray[ii] = c;
            }
        }
    }
    for (var i = 0; i < htmlElementsInArray.length; i++) {
        console.log(height[i]);
    }
    console.log("__")
    for (var i = 0; i < htmlElementsInArray.length; i++) {
        console.log(htmlElementsInArray[i].offsetHeight);
    }

    return htmlElementsInArray;
}


function orderHtmlDiv(htmlElement) {
    var htmlElementsInArray = getChildren(htmlElement);
    //var height = getChildHeight(children);
    htmlElementsInArray = orderArrayOnHeight(htmlElementsInArray);

    htmlElement.children[0] = htmlElementsInArray[0]

    //  console.log(htmlElementsInArray)

    // htmlElement.innerHTML = htmlElement.innerHTML
}


orderHtmlDiv(linkBox1)

//var children = getChildren(lin-kBox);
//var height = getChildHeight(children);
//orderArrayOnHeight(height);
// linkBox1.innerHTML = ""
// linkBox2.innerHTML = ""
