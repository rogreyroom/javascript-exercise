# Ćwiczenie 21 - "HTML String"

## Cel zadania*

To zadanie stanowi wstęp do projektu "Abstract Syntax Trees" https://przeprogramowani.pl/opanuj-javascript_ast.pdf. Zacznij od zapoznania się z jego wprowadzeniem i opisem.

Twoim rozgrzewkowym zadaniem jest napisanie funkcji, która przekonwertuje pojedynczy obiekt AST na HTML String.

_Przykład:_

``` convertAstToHtmlString({
        “nodeType”: “element”, “tagName”: “div”,
        “attributes”: [ { “name”: “class”, “value”: “test” }],
        “children”: [ “nodeType”: “text”, “value”: “Hello world!”]
    }) => "<div class="test">Hello world!</div>"
```
