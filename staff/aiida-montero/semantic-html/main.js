var children = document.body.children

printSemanticElements(children)

function printSemanticElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]

        // TODO do not print tags DIV, SPAN, SCRIPT, NOSCRIPT, STYLE, IFRAME
        if (element.tagName !== "DIV")
         if (element.tagName !== "SPAN")
          if (element.tagName !== "SCRIPT")
            if (element.tagName !== "STYLE")
              if (element.tagName !== "NOSCRIPT")
                if (element.tagName !== "IFRAME") {
                  console.log(element.tagName);
                } else {
                }
        printSemanticElements(element.children)
    }
}
