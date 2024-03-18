const e=Object.freeze({displayName:"Gleam",$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",name:"gleam",fileTypes:["gleam"],patterns:[{include:"#comments"},{include:"#keywords"},{include:"#strings"},{include:"#constant"},{include:"#entity"}],repository:{keywords:{patterns:[{name:"keyword.control.gleam",match:"\\b(as|use|case|if|fn|import|let|assert|pub|type|opaque|const|todo|panic)\\b"},{name:"keyword.operator.arrow.gleam",match:"(<\\-|\\->)"},{name:"keyword.operator.pipe.gleam",match:"\\|>"},{name:"keyword.operator.splat.gleam",match:"\\.\\."},{name:"keyword.operator.comparison.float.gleam",match:"(<=\\.|>=\\.|==\\.|!=\\.|<\\.|>\\.)"},{name:"keyword.operator.comparison.int.gleam",match:"(<=|>=|==|!=|<|>)"},{name:"keyword.operator.logical.gleam",match:"(&&|\\|\\|)"},{name:"keyword.operator.string.gleam",match:"<>"},{name:"keyword.operator.other.gleam",match:"\\|"},{name:"keyword.operator.arithmetic.float.gleam",match:"(\\+\\.|\\-\\.|/\\.|\\*\\.|%\\.)"},{name:"keyword.operator.arithmetic.int.gleam",match:"(\\+|\\-|/|\\*|%)"},{name:"keyword.operator.assignment.gleam",match:"="}]},strings:{name:"string.quoted.double.gleam",begin:'"',end:'"',patterns:[{name:"constant.character.escape.gleam",match:"\\\\."}]},comments:{patterns:[{name:"comment.line.gleam",match:"//.*"}]},constant:{patterns:[{include:"#binary_number"},{include:"#octal_number"},{include:"#hexadecimal_number"},{include:"#decimal_number"},{include:"#boolean"},{name:"entity.name.type.gleam",match:"[[:upper:]][[:word:]]*"}]},binary_number:{name:"constant.numeric.binary.gleam",match:"\\b0b[0-1]+\\b",patterns:[]},octal_number:{name:"constant.numeric.octal.gleam",match:"\\b0o[0-7]+\\b",patterns:[]},decimal_number:{name:"constant.numeric.decimal.gleam",match:"\\b[[:digit:]][[:digit:]_]*(\\.[[:digit:]]*)?\\b",patterns:[]},hexadecimal_number:{name:"constant.numeric.hexadecimal.gleam",match:"\\b0x[[:xdigit:]]+\\b",patterns:[]},boolean:{name:"constant.language.boolean.gleam",match:"\\b(True|False)\\b",patterns:[]},entity:{patterns:[{begin:"\\b([[:lower:]][[:word:]]*)([[:space:]]*)?\\(",end:"\\)",patterns:[{include:"$self"}],captures:{1:{name:"entity.name.function.gleam"}}},{name:"variable.parameter.gleam",match:"\\b([[:lower:]][[:word:]]*):\\s"},{name:"entity.name.namespace.gleam",match:"\\b([[:lower:]][[:word:]]*):"}]}},scopeName:"source.gleam"});var a=[e];export{a as default};
