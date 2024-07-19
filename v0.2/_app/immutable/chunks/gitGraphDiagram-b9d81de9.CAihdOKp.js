import{c as O,s as vt,g as Ct,a as Ot,b as Pt,p as At,q as St,l as H,j as D,r as It,h as Gt,u as Nt,z as Ht,A as Bt}from"./Markdown.Dr93Bs9e.js";var mt=function(){var r=function(S,o,u,d){for(u=u||{},d=S.length;d--;u[S[d]]=o);return u},n=[1,3],l=[1,6],h=[1,4],a=[1,5],c=[2,5],p=[1,12],m=[5,7,13,19,21,23,24,26,28,31,37,40,47],y=[7,13,19,21,23,24,26,28,31,37,40],x=[7,12,13,19,21,23,24,26,28,31,37,40],s=[7,13,47],_=[1,42],E=[1,41],b=[7,13,29,32,35,38,47],f=[1,55],k=[1,56],g=[1,57],T=[7,13,32,35,42,47],z={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,GG:5,document:6,EOF:7,":":8,DIR:9,options:10,body:11,OPT:12,NL:13,line:14,statement:15,commitStatement:16,mergeStatement:17,cherryPickStatement:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,section:24,branchStatement:25,CHECKOUT:26,ref:27,BRANCH:28,ORDER:29,NUM:30,CHERRY_PICK:31,COMMIT_ID:32,STR:33,PARENT_COMMIT:34,COMMIT_TAG:35,EMPTYSTR:36,MERGE:37,COMMIT_TYPE:38,commitType:39,COMMIT:40,commit_arg:41,COMMIT_MSG:42,NORMAL:43,REVERSE:44,HIGHLIGHT:45,ID:46,";":47,$accept:0,$end:1},terminals_:{2:"error",5:"GG",7:"EOF",8:":",9:"DIR",12:"OPT",13:"NL",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"section",26:"CHECKOUT",28:"BRANCH",29:"ORDER",30:"NUM",31:"CHERRY_PICK",32:"COMMIT_ID",33:"STR",34:"PARENT_COMMIT",35:"COMMIT_TAG",36:"EMPTYSTR",37:"MERGE",38:"COMMIT_TYPE",40:"COMMIT",42:"COMMIT_MSG",43:"NORMAL",44:"REVERSE",45:"HIGHLIGHT",46:"ID",47:";"},productions_:[0,[3,2],[3,3],[3,4],[3,5],[6,0],[6,2],[10,2],[10,1],[11,0],[11,2],[14,2],[14,1],[15,1],[15,1],[15,1],[15,2],[15,2],[15,1],[15,1],[15,1],[15,2],[25,2],[25,4],[18,3],[18,5],[18,5],[18,7],[18,7],[18,5],[18,5],[18,5],[18,7],[18,7],[18,7],[18,7],[17,2],[17,4],[17,4],[17,4],[17,6],[17,6],[17,6],[17,6],[17,6],[17,6],[17,8],[17,8],[17,8],[17,8],[17,8],[17,8],[16,2],[16,3],[16,3],[16,5],[16,5],[16,3],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,3],[16,5],[16,5],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[41,0],[41,1],[39,1],[39,1],[39,1],[27,1],[27,1],[4,1],[4,1],[4,1]],performAction:function(o,u,d,i,w,t,X){var e=t.length-1;switch(w){case 2:return t[e];case 3:return t[e-1];case 4:return i.setDirection(t[e-3]),t[e-1];case 6:i.setOptions(t[e-1]),this.$=t[e];break;case 7:t[e-1]+=t[e],this.$=t[e-1];break;case 9:this.$=[];break;case 10:t[e-1].push(t[e]),this.$=t[e-1];break;case 11:this.$=t[e-1];break;case 16:this.$=t[e].trim(),i.setAccTitle(this.$);break;case 17:case 18:this.$=t[e].trim(),i.setAccDescription(this.$);break;case 19:i.addSection(t[e].substr(8)),this.$=t[e].substr(8);break;case 21:i.checkout(t[e]);break;case 22:i.branch(t[e]);break;case 23:i.branch(t[e-2],t[e]);break;case 24:i.cherryPick(t[e],"",void 0);break;case 25:i.cherryPick(t[e-2],"",void 0,t[e]);break;case 26:i.cherryPick(t[e-2],"",t[e]);break;case 27:i.cherryPick(t[e-4],"",t[e],t[e-2]);break;case 28:i.cherryPick(t[e-4],"",t[e-2],t[e]);break;case 29:i.cherryPick(t[e],"",t[e-2]);break;case 30:i.cherryPick(t[e],"","");break;case 31:i.cherryPick(t[e-2],"","");break;case 32:i.cherryPick(t[e-4],"","",t[e-2]);break;case 33:i.cherryPick(t[e-4],"","",t[e]);break;case 34:i.cherryPick(t[e-2],"",t[e-4],t[e]);break;case 35:i.cherryPick(t[e-2],"","",t[e]);break;case 36:i.merge(t[e],"","","");break;case 37:i.merge(t[e-2],t[e],"","");break;case 38:i.merge(t[e-2],"",t[e],"");break;case 39:i.merge(t[e-2],"","",t[e]);break;case 40:i.merge(t[e-4],t[e],"",t[e-2]);break;case 41:i.merge(t[e-4],"",t[e],t[e-2]);break;case 42:i.merge(t[e-4],"",t[e-2],t[e]);break;case 43:i.merge(t[e-4],t[e-2],t[e],"");break;case 44:i.merge(t[e-4],t[e-2],"",t[e]);break;case 45:i.merge(t[e-4],t[e],t[e-2],"");break;case 46:i.merge(t[e-6],t[e-4],t[e-2],t[e]);break;case 47:i.merge(t[e-6],t[e],t[e-4],t[e-2]);break;case 48:i.merge(t[e-6],t[e-4],t[e],t[e-2]);break;case 49:i.merge(t[e-6],t[e-2],t[e-4],t[e]);break;case 50:i.merge(t[e-6],t[e],t[e-2],t[e-4]);break;case 51:i.merge(t[e-6],t[e-2],t[e],t[e-4]);break;case 52:i.commit(t[e]);break;case 53:i.commit("","",i.commitType.NORMAL,t[e]);break;case 54:i.commit("","",t[e],"");break;case 55:i.commit("","",t[e],t[e-2]);break;case 56:i.commit("","",t[e-2],t[e]);break;case 57:i.commit("",t[e],i.commitType.NORMAL,"");break;case 58:i.commit("",t[e-2],i.commitType.NORMAL,t[e]);break;case 59:i.commit("",t[e],i.commitType.NORMAL,t[e-2]);break;case 60:i.commit("",t[e-2],t[e],"");break;case 61:i.commit("",t[e],t[e-2],"");break;case 62:i.commit("",t[e-4],t[e-2],t[e]);break;case 63:i.commit("",t[e-4],t[e],t[e-2]);break;case 64:i.commit("",t[e-2],t[e-4],t[e]);break;case 65:i.commit("",t[e],t[e-4],t[e-2]);break;case 66:i.commit("",t[e],t[e-2],t[e-4]);break;case 67:i.commit("",t[e-2],t[e],t[e-4]);break;case 68:i.commit(t[e],"",i.commitType.NORMAL,"");break;case 69:i.commit(t[e],"",i.commitType.NORMAL,t[e-2]);break;case 70:i.commit(t[e-2],"",i.commitType.NORMAL,t[e]);break;case 71:i.commit(t[e-2],"",t[e],"");break;case 72:i.commit(t[e],"",t[e-2],"");break;case 73:i.commit(t[e],t[e-2],i.commitType.NORMAL,"");break;case 74:i.commit(t[e-2],t[e],i.commitType.NORMAL,"");break;case 75:i.commit(t[e-4],"",t[e-2],t[e]);break;case 76:i.commit(t[e-4],"",t[e],t[e-2]);break;case 77:i.commit(t[e-2],"",t[e-4],t[e]);break;case 78:i.commit(t[e],"",t[e-4],t[e-2]);break;case 79:i.commit(t[e],"",t[e-2],t[e-4]);break;case 80:i.commit(t[e-2],"",t[e],t[e-4]);break;case 81:i.commit(t[e-4],t[e],t[e-2],"");break;case 82:i.commit(t[e-4],t[e-2],t[e],"");break;case 83:i.commit(t[e-2],t[e],t[e-4],"");break;case 84:i.commit(t[e],t[e-2],t[e-4],"");break;case 85:i.commit(t[e],t[e-4],t[e-2],"");break;case 86:i.commit(t[e-2],t[e-4],t[e],"");break;case 87:i.commit(t[e-4],t[e],i.commitType.NORMAL,t[e-2]);break;case 88:i.commit(t[e-4],t[e-2],i.commitType.NORMAL,t[e]);break;case 89:i.commit(t[e-2],t[e],i.commitType.NORMAL,t[e-4]);break;case 90:i.commit(t[e],t[e-2],i.commitType.NORMAL,t[e-4]);break;case 91:i.commit(t[e],t[e-4],i.commitType.NORMAL,t[e-2]);break;case 92:i.commit(t[e-2],t[e-4],i.commitType.NORMAL,t[e]);break;case 93:i.commit(t[e-6],t[e-4],t[e-2],t[e]);break;case 94:i.commit(t[e-6],t[e-4],t[e],t[e-2]);break;case 95:i.commit(t[e-6],t[e-2],t[e-4],t[e]);break;case 96:i.commit(t[e-6],t[e],t[e-4],t[e-2]);break;case 97:i.commit(t[e-6],t[e-2],t[e],t[e-4]);break;case 98:i.commit(t[e-6],t[e],t[e-2],t[e-4]);break;case 99:i.commit(t[e-4],t[e-6],t[e-2],t[e]);break;case 100:i.commit(t[e-4],t[e-6],t[e],t[e-2]);break;case 101:i.commit(t[e-2],t[e-6],t[e-4],t[e]);break;case 102:i.commit(t[e],t[e-6],t[e-4],t[e-2]);break;case 103:i.commit(t[e-2],t[e-6],t[e],t[e-4]);break;case 104:i.commit(t[e],t[e-6],t[e-2],t[e-4]);break;case 105:i.commit(t[e],t[e-4],t[e-2],t[e-6]);break;case 106:i.commit(t[e-2],t[e-4],t[e],t[e-6]);break;case 107:i.commit(t[e],t[e-2],t[e-4],t[e-6]);break;case 108:i.commit(t[e-2],t[e],t[e-4],t[e-6]);break;case 109:i.commit(t[e-4],t[e-2],t[e],t[e-6]);break;case 110:i.commit(t[e-4],t[e],t[e-2],t[e-6]);break;case 111:i.commit(t[e-2],t[e-4],t[e-6],t[e]);break;case 112:i.commit(t[e],t[e-4],t[e-6],t[e-2]);break;case 113:i.commit(t[e-2],t[e],t[e-6],t[e-4]);break;case 114:i.commit(t[e],t[e-2],t[e-6],t[e-4]);break;case 115:i.commit(t[e-4],t[e-2],t[e-6],t[e]);break;case 116:i.commit(t[e-4],t[e],t[e-6],t[e-2]);break;case 117:this.$="";break;case 118:this.$=t[e];break;case 119:this.$=i.commitType.NORMAL;break;case 120:this.$=i.commitType.REVERSE;break;case 121:this.$=i.commitType.HIGHLIGHT;break}},table:[{3:1,4:2,5:n,7:l,13:h,47:a},{1:[3]},{3:7,4:2,5:n,7:l,13:h,47:a},{6:8,7:c,8:[1,9],9:[1,10],10:11,13:p},r(m,[2,124]),r(m,[2,125]),r(m,[2,126]),{1:[2,1]},{7:[1,13]},{6:14,7:c,10:11,13:p},{8:[1,15]},r(y,[2,9],{11:16,12:[1,17]}),r(x,[2,8]),{1:[2,2]},{7:[1,18]},{6:19,7:c,10:11,13:p},{7:[2,6],13:[1,22],14:20,15:21,16:23,17:24,18:25,19:[1,26],21:[1,27],23:[1,28],24:[1,29],25:30,26:[1,31],28:[1,35],31:[1,34],37:[1,33],40:[1,32]},r(x,[2,7]),{1:[2,3]},{7:[1,36]},r(y,[2,10]),{4:37,7:l,13:h,47:a},r(y,[2,12]),r(s,[2,13]),r(s,[2,14]),r(s,[2,15]),{20:[1,38]},{22:[1,39]},r(s,[2,18]),r(s,[2,19]),r(s,[2,20]),{27:40,33:_,46:E},r(s,[2,117],{41:43,32:[1,46],33:[1,48],35:[1,44],38:[1,45],42:[1,47]}),{27:49,33:_,46:E},{32:[1,50],35:[1,51]},{27:52,33:_,46:E},{1:[2,4]},r(y,[2,11]),r(s,[2,16]),r(s,[2,17]),r(s,[2,21]),r(b,[2,122]),r(b,[2,123]),r(s,[2,52]),{33:[1,53]},{39:54,43:f,44:k,45:g},{33:[1,58]},{33:[1,59]},r(s,[2,118]),r(s,[2,36],{32:[1,60],35:[1,62],38:[1,61]}),{33:[1,63]},{33:[1,64],36:[1,65]},r(s,[2,22],{29:[1,66]}),r(s,[2,53],{32:[1,68],38:[1,67],42:[1,69]}),r(s,[2,54],{32:[1,71],35:[1,70],42:[1,72]}),r(T,[2,119]),r(T,[2,120]),r(T,[2,121]),r(s,[2,57],{35:[1,73],38:[1,74],42:[1,75]}),r(s,[2,68],{32:[1,78],35:[1,76],38:[1,77]}),{33:[1,79]},{39:80,43:f,44:k,45:g},{33:[1,81]},r(s,[2,24],{34:[1,82],35:[1,83]}),{32:[1,84]},{32:[1,85]},{30:[1,86]},{39:87,43:f,44:k,45:g},{33:[1,88]},{33:[1,89]},{33:[1,90]},{33:[1,91]},{33:[1,92]},{33:[1,93]},{39:94,43:f,44:k,45:g},{33:[1,95]},{33:[1,96]},{39:97,43:f,44:k,45:g},{33:[1,98]},r(s,[2,37],{35:[1,100],38:[1,99]}),r(s,[2,38],{32:[1,102],35:[1,101]}),r(s,[2,39],{32:[1,103],38:[1,104]}),{33:[1,105]},{33:[1,106],36:[1,107]},{33:[1,108]},{33:[1,109]},r(s,[2,23]),r(s,[2,55],{32:[1,110],42:[1,111]}),r(s,[2,59],{38:[1,112],42:[1,113]}),r(s,[2,69],{32:[1,115],38:[1,114]}),r(s,[2,56],{32:[1,116],42:[1,117]}),r(s,[2,61],{35:[1,118],42:[1,119]}),r(s,[2,72],{32:[1,121],35:[1,120]}),r(s,[2,58],{38:[1,122],42:[1,123]}),r(s,[2,60],{35:[1,124],42:[1,125]}),r(s,[2,73],{35:[1,127],38:[1,126]}),r(s,[2,70],{32:[1,129],38:[1,128]}),r(s,[2,71],{32:[1,131],35:[1,130]}),r(s,[2,74],{35:[1,133],38:[1,132]}),{39:134,43:f,44:k,45:g},{33:[1,135]},{33:[1,136]},{33:[1,137]},{33:[1,138]},{39:139,43:f,44:k,45:g},r(s,[2,25],{35:[1,140]}),r(s,[2,26],{34:[1,141]}),r(s,[2,31],{34:[1,142]}),r(s,[2,29],{34:[1,143]}),r(s,[2,30],{34:[1,144]}),{33:[1,145]},{33:[1,146]},{39:147,43:f,44:k,45:g},{33:[1,148]},{39:149,43:f,44:k,45:g},{33:[1,150]},{33:[1,151]},{33:[1,152]},{33:[1,153]},{33:[1,154]},{33:[1,155]},{33:[1,156]},{39:157,43:f,44:k,45:g},{33:[1,158]},{33:[1,159]},{33:[1,160]},{39:161,43:f,44:k,45:g},{33:[1,162]},{39:163,43:f,44:k,45:g},{33:[1,164]},{33:[1,165]},{33:[1,166]},{39:167,43:f,44:k,45:g},{33:[1,168]},r(s,[2,43],{35:[1,169]}),r(s,[2,44],{38:[1,170]}),r(s,[2,42],{32:[1,171]}),r(s,[2,45],{35:[1,172]}),r(s,[2,40],{38:[1,173]}),r(s,[2,41],{32:[1,174]}),{33:[1,175],36:[1,176]},{33:[1,177]},{33:[1,178]},{33:[1,179]},{33:[1,180]},r(s,[2,66],{42:[1,181]}),r(s,[2,79],{32:[1,182]}),r(s,[2,67],{42:[1,183]}),r(s,[2,90],{38:[1,184]}),r(s,[2,80],{32:[1,185]}),r(s,[2,89],{38:[1,186]}),r(s,[2,65],{42:[1,187]}),r(s,[2,78],{32:[1,188]}),r(s,[2,64],{42:[1,189]}),r(s,[2,84],{35:[1,190]}),r(s,[2,77],{32:[1,191]}),r(s,[2,83],{35:[1,192]}),r(s,[2,63],{42:[1,193]}),r(s,[2,91],{38:[1,194]}),r(s,[2,62],{42:[1,195]}),r(s,[2,85],{35:[1,196]}),r(s,[2,86],{35:[1,197]}),r(s,[2,92],{38:[1,198]}),r(s,[2,76],{32:[1,199]}),r(s,[2,87],{38:[1,200]}),r(s,[2,75],{32:[1,201]}),r(s,[2,81],{35:[1,202]}),r(s,[2,82],{35:[1,203]}),r(s,[2,88],{38:[1,204]}),{33:[1,205]},{39:206,43:f,44:k,45:g},{33:[1,207]},{33:[1,208]},{39:209,43:f,44:k,45:g},{33:[1,210]},r(s,[2,27]),r(s,[2,32]),r(s,[2,28]),r(s,[2,33]),r(s,[2,34]),r(s,[2,35]),{33:[1,211]},{33:[1,212]},{33:[1,213]},{39:214,43:f,44:k,45:g},{33:[1,215]},{39:216,43:f,44:k,45:g},{33:[1,217]},{33:[1,218]},{33:[1,219]},{33:[1,220]},{33:[1,221]},{33:[1,222]},{33:[1,223]},{39:224,43:f,44:k,45:g},{33:[1,225]},{33:[1,226]},{33:[1,227]},{39:228,43:f,44:k,45:g},{33:[1,229]},{39:230,43:f,44:k,45:g},{33:[1,231]},{33:[1,232]},{33:[1,233]},{39:234,43:f,44:k,45:g},r(s,[2,46]),r(s,[2,48]),r(s,[2,47]),r(s,[2,49]),r(s,[2,51]),r(s,[2,50]),r(s,[2,107]),r(s,[2,108]),r(s,[2,105]),r(s,[2,106]),r(s,[2,110]),r(s,[2,109]),r(s,[2,114]),r(s,[2,113]),r(s,[2,112]),r(s,[2,111]),r(s,[2,116]),r(s,[2,115]),r(s,[2,104]),r(s,[2,103]),r(s,[2,102]),r(s,[2,101]),r(s,[2,99]),r(s,[2,100]),r(s,[2,98]),r(s,[2,97]),r(s,[2,96]),r(s,[2,95]),r(s,[2,93]),r(s,[2,94])],defaultActions:{7:[2,1],13:[2,2],18:[2,3],36:[2,4]},parseError:function(o,u){if(u.recoverable)this.trace(o);else{var d=new Error(o);throw d.hash=u,d}},parse:function(o){var u=this,d=[0],i=[],w=[null],t=[],X=this.table,e="",rt=0,ft=0,wt=2,pt=1,Rt=t.slice.call(arguments,1),P=Object.create(this.lexer),F={yy:{}};for(var ct in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ct)&&(F.yy[ct]=this.yy[ct]);P.setInput(o,F.yy),F.yy.lexer=P,F.yy.parser=this,typeof P.yylloc>"u"&&(P.yylloc={});var ot=P.yylloc;t.push(ot);var Lt=P.options&&P.options.ranges;typeof F.yy.parseError=="function"?this.parseError=F.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Mt(){var j;return j=i.pop()||P.lex()||pt,typeof j!="number"&&(j instanceof Array&&(i=j,j=i.pop()),j=u.symbols_[j]||j),j}for(var N,K,V,lt,J={},it,q,bt,st;;){if(K=d[d.length-1],this.defaultActions[K]?V=this.defaultActions[K]:((N===null||typeof N>"u")&&(N=Mt()),V=X[K]&&X[K][N]),typeof V>"u"||!V.length||!V[0]){var ht="";st=[];for(it in X[K])this.terminals_[it]&&it>wt&&st.push("'"+this.terminals_[it]+"'");P.showPosition?ht="Parse error on line "+(rt+1)+`:
`+P.showPosition()+`
Expecting `+st.join(", ")+", got '"+(this.terminals_[N]||N)+"'":ht="Parse error on line "+(rt+1)+": Unexpected "+(N==pt?"end of input":"'"+(this.terminals_[N]||N)+"'"),this.parseError(ht,{text:P.match,token:this.terminals_[N]||N,line:P.yylineno,loc:ot,expected:st})}if(V[0]instanceof Array&&V.length>1)throw new Error("Parse Error: multiple actions possible at state: "+K+", token: "+N);switch(V[0]){case 1:d.push(N),w.push(P.yytext),t.push(P.yylloc),d.push(V[1]),N=null,ft=P.yyleng,e=P.yytext,rt=P.yylineno,ot=P.yylloc;break;case 2:if(q=this.productions_[V[1]][1],J.$=w[w.length-q],J._$={first_line:t[t.length-(q||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(q||1)].first_column,last_column:t[t.length-1].last_column},Lt&&(J._$.range=[t[t.length-(q||1)].range[0],t[t.length-1].range[1]]),lt=this.performAction.apply(J,[e,ft,rt,F.yy,V[1],w,t].concat(Rt)),typeof lt<"u")return lt;q&&(d=d.slice(0,-1*q*2),w=w.slice(0,-1*q),t=t.slice(0,-1*q)),d.push(this.productions_[V[1]][0]),w.push(J.$),t.push(J._$),bt=X[d[d.length-2]][d[d.length-1]],d.push(bt);break;case 3:return!0}}return!0}},v=function(){var S={EOF:1,parseError:function(u,d){if(this.yy.parser)this.yy.parser.parseError(u,d);else throw new Error(u)},setInput:function(o,u){return this.yy=u||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var u=o.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},unput:function(o){var u=o.length,d=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),d.length-1&&(this.yylineno-=d.length-1);var w=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:d?(d.length===i.length?this.yylloc.first_column:0)+i[i.length-d.length].length-d[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[w[0],w[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(o){this.unput(this.match.slice(o))},pastInput:function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var o=this.pastInput(),u=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+u+"^"},test_match:function(o,u){var d,i,w;if(this.options.backtrack_lexer&&(w={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(w.yylloc.range=this.yylloc.range.slice(0))),i=o[0].match(/(?:\r\n?|\n).*/g),i&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],d=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),d)return d;if(this._backtrack){for(var t in w)this[t]=w[t];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,u,d,i;this._more||(this.yytext="",this.match="");for(var w=this._currentRules(),t=0;t<w.length;t++)if(d=this._input.match(this.rules[w[t]]),d&&(!u||d[0].length>u[0].length)){if(u=d,i=t,this.options.backtrack_lexer){if(o=this.test_match(d,w[t]),o!==!1)return o;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(o=this.test_match(u,w[i]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var u=this.next();return u||this.lex()},begin:function(u){this.conditionStack.push(u)},popState:function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},pushState:function(u){this.begin(u)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(u,d,i,w){switch(i){case 0:return this.begin("acc_title"),19;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),21;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 13;case 8:break;case 9:break;case 10:return 5;case 11:return 40;case 12:return 32;case 13:return 38;case 14:return 42;case 15:return 43;case 16:return 44;case 17:return 45;case 18:return 35;case 19:return 28;case 20:return 29;case 21:return 37;case 22:return 31;case 23:return 34;case 24:return 26;case 25:return 9;case 26:return 9;case 27:return 8;case 28:return"CARET";case 29:this.begin("options");break;case 30:this.popState();break;case 31:return 12;case 32:return 36;case 33:this.begin("string");break;case 34:this.popState();break;case 35:return 33;case 36:return 30;case 37:return 46;case 38:return 7}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:parent:)/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:TB\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},options:{rules:[30,31],inclusive:!1},string:{rules:[34,35],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,32,33,36,37,38,39],inclusive:!0}}};return S}();z.lexer=v;function I(){this.yy={}}return I.prototype=z,z.Parser=I,new I}();mt.parser=mt;const Vt=mt;let at=O().gitGraph.mainBranchName,Dt=O().gitGraph.mainBranchOrder,C={},G=null,tt={};tt[at]={name:at,order:Dt};let M={};M[at]=G;let A=at,kt="LR",W=0;function ut(){return Bt({length:7})}function zt(r,n){const l=Object.create(null);return r.reduce((h,a)=>{const c=n(a);return l[c]||(l[c]=!0,h.push(a)),h},[])}const qt=function(r){kt=r};let xt={};const jt=function(r){H.debug("options str",r),r=r&&r.trim(),r=r||"{}";try{xt=JSON.parse(r)}catch(n){H.error("error while parsing gitGraph options",n.message)}},Yt=function(){return xt},Ft=function(r,n,l,h){H.debug("Entering commit:",r,n,l,h),n=D.sanitizeText(n,O()),r=D.sanitizeText(r,O()),h=D.sanitizeText(h,O());const a={id:n||W+"-"+ut(),message:r,seq:W++,type:l||Q.NORMAL,tag:h||"",parents:G==null?[]:[G.id],branch:A};G=a,C[a.id]=a,M[A]=a.id,H.debug("in pushCommit "+a.id)},Kt=function(r,n){if(r=D.sanitizeText(r,O()),M[r]===void 0)M[r]=G!=null?G.id:null,tt[r]={name:r,order:n?parseInt(n,10):null},yt(r),H.debug("in createBranch");else{let l=new Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+r+'")');throw l.hash={text:"branch "+r,token:"branch "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+r+'"']},l}},Ut=function(r,n,l,h){r=D.sanitizeText(r,O()),n=D.sanitizeText(n,O());const a=C[M[A]],c=C[M[r]];if(A===r){let m=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw m.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},m}else if(a===void 0||!a){let m=new Error('Incorrect usage of "merge". Current branch ('+A+")has no commits");throw m.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},m}else if(M[r]===void 0){let m=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") does not exist");throw m.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+r]},m}else if(c===void 0||!c){let m=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") has no commits");throw m.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},m}else if(a===c){let m=new Error('Incorrect usage of "merge". Both branches have same head');throw m.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},m}else if(n&&C[n]!==void 0){let m=new Error('Incorrect usage of "merge". Commit with id:'+n+" already exists, use different custom Id");throw m.hash={text:"merge "+r+n+l+h,token:"merge "+r+n+l+h,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+r+" "+n+"_UNIQUE "+l+" "+h]},m}const p={id:n||W+"-"+ut(),message:"merged branch "+r+" into "+A,seq:W++,parents:[G==null?null:G.id,M[r]],branch:A,type:Q.MERGE,customType:l,customId:!!n,tag:h||""};G=p,C[p.id]=p,M[A]=p.id,H.debug(M),H.debug("in mergeBranch")},Wt=function(r,n,l,h){if(H.debug("Entering cherryPick:",r,n,l),r=D.sanitizeText(r,O()),n=D.sanitizeText(n,O()),l=D.sanitizeText(l,O()),h=D.sanitizeText(h,O()),!r||C[r]===void 0){let p=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw p.hash={text:"cherryPick "+r+" "+n,token:"cherryPick "+r+" "+n,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},p}let a=C[r],c=a.branch;if(h&&!(Array.isArray(a.parents)&&a.parents.includes(h)))throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");if(a.type===Q.MERGE&&!h)throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");if(!n||C[n]===void 0){if(c===A){let y=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw y.hash={text:"cherryPick "+r+" "+n,token:"cherryPick "+r+" "+n,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},y}const p=C[M[A]];if(p===void 0||!p){let y=new Error('Incorrect usage of "cherry-pick". Current branch ('+A+")has no commits");throw y.hash={text:"cherryPick "+r+" "+n,token:"cherryPick "+r+" "+n,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},y}const m={id:W+"-"+ut(),message:"cherry-picked "+a+" into "+A,seq:W++,parents:[G==null?null:G.id,a.id],branch:A,type:Q.CHERRY_PICK,tag:l??`cherry-pick:${a.id}${a.type===Q.MERGE?`|parent:${h}`:""}`};G=m,C[m.id]=m,M[A]=m.id,H.debug(M),H.debug("in cherryPick")}},yt=function(r){if(r=D.sanitizeText(r,O()),M[r]===void 0){let n=new Error('Trying to checkout branch which is not yet created. (Help try using "branch '+r+'")');throw n.hash={text:"checkout "+r,token:"checkout "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+r+'"']},n}else{A=r;const n=M[A];G=C[n]}};function gt(r,n,l){const h=r.indexOf(n);h===-1?r.push(l):r.splice(h,1,l)}function _t(r){const n=r.reduce((a,c)=>a.seq>c.seq?a:c,r[0]);let l="";r.forEach(function(a){a===n?l+="	*":l+="	|"});const h=[l,n.id,n.seq];for(let a in M)M[a]===n.id&&h.push(a);if(H.debug(h.join(" ")),n.parents&&n.parents.length==2){const a=C[n.parents[0]];gt(r,n,a),r.push(C[n.parents[1]])}else{if(n.parents.length==0)return;{const a=C[n.parents];gt(r,n,a)}}r=zt(r,a=>a.id),_t(r)}const Jt=function(){H.debug(C);const r=Et()[0];_t([r])},Qt=function(){C={},G=null;let r=O().gitGraph.mainBranchName,n=O().gitGraph.mainBranchOrder;M={},M[r]=null,tt={},tt[r]={name:r,order:n},A=r,W=0,It()},Xt=function(){return Object.values(tt).map((n,l)=>n.order!==null?n:{...n,order:parseFloat(`0.${l}`,10)}).sort((n,l)=>n.order-l.order).map(({name:n})=>({name:n}))},Zt=function(){return M},$t=function(){return C},Et=function(){const r=Object.keys(C).map(function(n){return C[n]});return r.forEach(function(n){H.debug(n.id)}),r.sort((n,l)=>n.seq-l.seq),r},te=function(){return A},ee=function(){return kt},re=function(){return G},Q={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},ie={getConfig:()=>O().gitGraph,setDirection:qt,setOptions:jt,getOptions:Yt,commit:Ft,branch:Kt,merge:Ut,cherryPick:Wt,checkout:yt,prettyPrint:Jt,clear:Qt,getBranchesAsObjArray:Xt,getBranches:Zt,getCommits:$t,getCommitsArray:Et,getCurrentBranch:te,getDirection:ee,getHead:re,setAccTitle:vt,getAccTitle:Ct,getAccDescription:Ot,setAccDescription:Pt,setDiagramTitle:At,getDiagramTitle:St,commitType:Q};let Z={};const B={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},U=8;let R={},Y={},nt=[],et=0,L="LR";const se=()=>{R={},Y={},Z={},et=0,nt=[],L="LR"},Tt=r=>{const n=document.createElementNS("http://www.w3.org/2000/svg","text");let l=[];typeof r=="string"?l=r.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(r)?l=r:l=[];for(const h of l){const a=document.createElementNS("http://www.w3.org/2000/svg","tspan");a.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),a.setAttribute("dy","1em"),a.setAttribute("x","0"),a.setAttribute("class","row"),a.textContent=h.trim(),n.appendChild(a)}return n},ae=r=>{let n="",l=0;return r.forEach(h=>{const a=L==="TB"?Y[h].y:Y[h].x;a>=l&&(n=h,l=a)}),n||void 0},dt=(r,n,l)=>{const h=O().gitGraph,a=r.append("g").attr("class","commit-bullets"),c=r.append("g").attr("class","commit-labels");let p=0;L==="TB"&&(p=30);const y=Object.keys(n).sort((E,b)=>n[E].seq-n[b].seq),x=h.parallelCommits,s=10,_=40;y.forEach(E=>{const b=n[E];if(x)if(b.parents.length){const T=ae(b.parents);p=L==="TB"?Y[T].y+_:Y[T].x+_}else p=0,L==="TB"&&(p=30);const f=p+s,k=L==="TB"?f:R[b.branch].pos,g=L==="TB"?R[b.branch].pos:f;if(l){let T,z=b.customType!==void 0&&b.customType!==""?b.customType:b.type;switch(z){case B.NORMAL:T="commit-normal";break;case B.REVERSE:T="commit-reverse";break;case B.HIGHLIGHT:T="commit-highlight";break;case B.MERGE:T="commit-merge";break;case B.CHERRY_PICK:T="commit-cherry-pick";break;default:T="commit-normal"}if(z===B.HIGHLIGHT){const v=a.append("rect");v.attr("x",g-10),v.attr("y",k-10),v.attr("height",20),v.attr("width",20),v.attr("class",`commit ${b.id} commit-highlight${R[b.branch].index%U} ${T}-outer`),a.append("rect").attr("x",g-6).attr("y",k-6).attr("height",12).attr("width",12).attr("class",`commit ${b.id} commit${R[b.branch].index%U} ${T}-inner`)}else if(z===B.CHERRY_PICK)a.append("circle").attr("cx",g).attr("cy",k).attr("r",10).attr("class",`commit ${b.id} ${T}`),a.append("circle").attr("cx",g-3).attr("cy",k+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${b.id} ${T}`),a.append("circle").attr("cx",g+3).attr("cy",k+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${b.id} ${T}`),a.append("line").attr("x1",g+3).attr("y1",k+1).attr("x2",g).attr("y2",k-5).attr("stroke","#fff").attr("class",`commit ${b.id} ${T}`),a.append("line").attr("x1",g-3).attr("y1",k+1).attr("x2",g).attr("y2",k-5).attr("stroke","#fff").attr("class",`commit ${b.id} ${T}`);else{const v=a.append("circle");if(v.attr("cx",g),v.attr("cy",k),v.attr("r",b.type===B.MERGE?9:10),v.attr("class",`commit ${b.id} commit${R[b.branch].index%U}`),z===B.MERGE){const I=a.append("circle");I.attr("cx",g),I.attr("cy",k),I.attr("r",6),I.attr("class",`commit ${T} ${b.id} commit${R[b.branch].index%U}`)}z===B.REVERSE&&a.append("path").attr("d",`M ${g-5},${k-5}L${g+5},${k+5}M${g-5},${k+5}L${g+5},${k-5}`).attr("class",`commit ${T} ${b.id} commit${R[b.branch].index%U}`)}}if(L==="TB"?Y[b.id]={x:g,y:f}:Y[b.id]={x:f,y:k},l){if(b.type!==B.CHERRY_PICK&&(b.customId&&b.type===B.MERGE||b.type!==B.MERGE)&&h.showCommitLabel){const v=c.append("g"),I=v.insert("rect").attr("class","commit-label-bkg"),S=v.append("text").attr("x",p).attr("y",k+25).attr("class","commit-label").text(b.id);let o=S.node().getBBox();if(I.attr("x",f-o.width/2-2).attr("y",k+13.5).attr("width",o.width+2*2).attr("height",o.height+2*2),L==="TB"&&(I.attr("x",g-(o.width+4*4+5)).attr("y",k-12),S.attr("x",g-(o.width+4*4)).attr("y",k+o.height-12)),L!=="TB"&&S.attr("x",f-o.width/2),h.rotateCommitLabel)if(L==="TB")S.attr("transform","rotate(-45, "+g+", "+k+")"),I.attr("transform","rotate(-45, "+g+", "+k+")");else{let u=-7.5-(o.width+10)/25*9.5,d=10+o.width/25*8.5;v.attr("transform","translate("+u+", "+d+") rotate(-45, "+p+", "+k+")")}}if(b.tag){const v=c.insert("polygon"),I=c.append("circle"),S=c.append("text").attr("y",k-16).attr("class","tag-label").text(b.tag);let o=S.node().getBBox();S.attr("x",f-o.width/2);const u=o.height/2,d=k-19.2;v.attr("class","tag-label-bkg").attr("points",`
          ${p-o.width/2-4/2},${d+2}
          ${p-o.width/2-4/2},${d-2}
          ${f-o.width/2-4},${d-u-2}
          ${f+o.width/2+4},${d-u-2}
          ${f+o.width/2+4},${d+u+2}
          ${f-o.width/2-4},${d+u+2}`),I.attr("cx",p-o.width/2+4/2).attr("cy",d).attr("r",1.5).attr("class","tag-hole"),L==="TB"&&(v.attr("class","tag-label-bkg").attr("points",`
            ${g},${p+2}
            ${g},${p-2}
            ${g+s},${p-u-2}
            ${g+s+o.width+4},${p-u-2}
            ${g+s+o.width+4},${p+u+2}
            ${g+s},${p+u+2}`).attr("transform","translate(12,12) rotate(45, "+g+","+p+")"),I.attr("cx",g+4/2).attr("cy",p).attr("transform","translate(12,12) rotate(45, "+g+","+p+")"),S.attr("x",g+5).attr("y",p+3).attr("transform","translate(14,14) rotate(45, "+g+","+p+")"))}}p+=_+s,p>et&&(et=p)})},ne=(r,n,l,h,a)=>{const p=(L==="TB"?l.x<h.x:l.y<h.y)?n.branch:r.branch,m=x=>x.branch===p,y=x=>x.seq>r.seq&&x.seq<n.seq;return Object.values(a).some(x=>y(x)&&m(x))},$=(r,n,l=0)=>{const h=r+Math.abs(r-n)/2;if(l>5)return h;if(nt.every(p=>Math.abs(p-h)>=10))return nt.push(h),h;const c=Math.abs(r-n);return $(r,n-c/5,l+1)},ce=(r,n,l,h)=>{const a=Y[n.id],c=Y[l.id],p=ne(n,l,a,c,h);let m="",y="",x=0,s=0,_=R[l.branch].index,E;if(p){m="A 10 10, 0, 0, 0,",y="A 10 10, 0, 0, 1,",x=10,s=10;const b=a.y<c.y?$(a.y,c.y):$(c.y,a.y),f=a.x<c.x?$(a.x,c.x):$(c.x,a.x);L==="TB"?a.x<c.x?(_=R[l.branch].index,E=`M ${a.x} ${a.y} L ${f-x} ${a.y} ${y} ${f} ${a.y+s} L ${f} ${c.y-x} ${m} ${f+s} ${c.y} L ${c.x} ${c.y}`):(_=R[n.branch].index,E=`M ${a.x} ${a.y} L ${f+x} ${a.y} ${m} ${f} ${a.y+s} L ${f} ${c.y-x} ${y} ${f-s} ${c.y} L ${c.x} ${c.y}`):a.y<c.y?(_=R[l.branch].index,E=`M ${a.x} ${a.y} L ${a.x} ${b-x} ${m} ${a.x+s} ${b} L ${c.x-x} ${b} ${y} ${c.x} ${b+s} L ${c.x} ${c.y}`):(_=R[n.branch].index,E=`M ${a.x} ${a.y} L ${a.x} ${b+x} ${y} ${a.x+s} ${b} L ${c.x-x} ${b} ${m} ${c.x} ${b-s} L ${c.x} ${c.y}`)}else L==="TB"?(a.x<c.x&&(m="A 20 20, 0, 0, 0,",y="A 20 20, 0, 0, 1,",x=20,s=20,_=R[l.branch].index,E=`M ${a.x} ${a.y} L ${c.x-x} ${a.y} ${y} ${c.x} ${a.y+s} L ${c.x} ${c.y}`),a.x>c.x&&(m="A 20 20, 0, 0, 0,",y="A 20 20, 0, 0, 1,",x=20,s=20,_=R[n.branch].index,E=`M ${a.x} ${a.y} L ${a.x} ${c.y-x} ${y} ${a.x-s} ${c.y} L ${c.x} ${c.y}`),a.x===c.x&&(_=R[n.branch].index,E=`M ${a.x} ${a.y} L ${a.x+x} ${a.y} ${m} ${a.x+s} ${c.y+x} L ${c.x} ${c.y}`)):(a.y<c.y&&(m="A 20 20, 0, 0, 0,",x=20,s=20,_=R[l.branch].index,E=`M ${a.x} ${a.y} L ${a.x} ${c.y-x} ${m} ${a.x+s} ${c.y} L ${c.x} ${c.y}`),a.y>c.y&&(m="A 20 20, 0, 0, 0,",x=20,s=20,_=R[n.branch].index,E=`M ${a.x} ${a.y} L ${c.x-x} ${a.y} ${m} ${c.x} ${a.y-s} L ${c.x} ${c.y}`),a.y===c.y&&(_=R[n.branch].index,E=`M ${a.x} ${a.y} L ${a.x} ${c.y-x} ${m} ${a.x+s} ${c.y} L ${c.x} ${c.y}`));r.append("path").attr("d",E).attr("class","arrow arrow"+_%U)},oe=(r,n)=>{const l=r.append("g").attr("class","commit-arrows");Object.keys(n).forEach(h=>{const a=n[h];a.parents&&a.parents.length>0&&a.parents.forEach(c=>{ce(l,n[c],a,n)})})},le=(r,n)=>{const l=O().gitGraph,h=r.append("g");n.forEach((a,c)=>{const p=c%U,m=R[a.name].pos,y=h.append("line");y.attr("x1",0),y.attr("y1",m),y.attr("x2",et),y.attr("y2",m),y.attr("class","branch branch"+p),L==="TB"&&(y.attr("y1",30),y.attr("x1",m),y.attr("y2",et),y.attr("x2",m)),nt.push(m);let x=a.name;const s=Tt(x),_=h.insert("rect"),b=h.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+p);b.node().appendChild(s);let f=s.getBBox();_.attr("class","branchLabelBkg label"+p).attr("rx",4).attr("ry",4).attr("x",-f.width-4-(l.rotateCommitLabel===!0?30:0)).attr("y",-f.height/2+8).attr("width",f.width+18).attr("height",f.height+4),b.attr("transform","translate("+(-f.width-14-(l.rotateCommitLabel===!0?30:0))+", "+(m-f.height/2-1)+")"),L==="TB"&&(_.attr("x",m-f.width/2-10).attr("y",0),b.attr("transform","translate("+(m-f.width/2-5)+", 0)")),L!=="TB"&&_.attr("transform","translate(-19, "+(m-f.height/2)+")")})},he=function(r,n,l,h){se();const a=O(),c=a.gitGraph;H.debug("in gitgraph renderer",r+`
`,"id:",n,l),Z=h.db.getCommits();const p=h.db.getBranchesAsObjArray();L=h.db.getDirection();const m=Gt(`[id="${n}"]`);let y=0;p.forEach((x,s)=>{const _=Tt(x.name),E=m.append("g"),b=E.insert("g").attr("class","branchLabel"),f=b.insert("g").attr("class","label branch-label");f.node().appendChild(_);let k=_.getBBox();R[x.name]={pos:y,index:s},y+=50+(c.rotateCommitLabel?40:0)+(L==="TB"?k.width/2:0),f.remove(),b.remove(),E.remove()}),dt(m,Z,!1),c.showBranches&&le(m,p),oe(m,Z),dt(m,Z,!0),Nt.insertTitle(m,"gitTitleText",c.titleTopMargin,h.db.getDiagramTitle()),Ht(void 0,m,c.diagramPadding,c.useMaxWidth??a.useMaxWidth)},me={draw:he},ue=r=>`
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0,1,2,3,4,5,6,7].map(n=>`
        .branch-label${n} { fill: ${r["gitBranchLabel"+n]}; }
        .commit${n} { stroke: ${r["git"+n]}; fill: ${r["git"+n]}; }
        .commit-highlight${n} { stroke: ${r["gitInv"+n]}; fill: ${r["gitInv"+n]}; }
        .label${n}  { fill: ${r["git"+n]}; }
        .arrow${n} { stroke: ${r["git"+n]}; }
        `).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${r.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelColor};}
  .commit-label-bkg { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${r.tagLabelFontSize}; fill: ${r.tagLabelColor};}
  .tag-label-bkg { fill: ${r.tagLabelBackground}; stroke: ${r.tagLabelBorder}; }
  .tag-hole { fill: ${r.textColor}; }

  .commit-merge {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
  }
  .commit-reverse {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${r.textColor};
  }
`,fe=ue,be={parser:Vt,db:ie,renderer:me,styles:fe};export{be as diagram};