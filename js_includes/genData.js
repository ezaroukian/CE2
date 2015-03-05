

var P1B1 = "the person P1 reads the book B1";
var P1B2 = "the person P1 reads the book B2";
var P2B1 = "the person P2 reads the book B1";	
var P2B2 = "the person P2 reads the book B2";
var P1nB1 = "the person P1 cannot read the book B1";
var P1nB2 = "the person P1 cannot read the book B2";	
var P2nB1 = "the person P2 cannot read the book B1";	
var P2nB2 = "the person P2 cannot read the book B2";
var P2iP1 = "the person P2 is the person P1";
var B2iB1 = "the book B2 is the book B1";
var P2nP1 = "the person P2 cannot be the person P1";
var B2nB1 = "the book B2 cannot be the book B2";

var parts = [P1B1,
P1B2,
P2B1,
P2B2,
P1nB1,
P1nB2,
P2nB1,
P2nB2,
P2iP1,
B2iB1,
P2nP1,
B2nB1
];

function buildCE(form, order, multi){
	var conj1 = "error1";
	var conj2 = "error2";
	var cons = "error";
	switch(form){
		case "11n13"://11n13 2B: P1B1 / B2nB1, P1nB2 
			if(multi=="2B"){
				conj1 = P1B1;
				conj2 = B2nB1;
				cons = P1nB2;
			}
			else if(multi=="2P"){
				var temp = "error";
			}
			var temp1 = "error";
			break;
		case "13n11"://13n11 2B: P1B1 / B2nB1, P1B2
			if(multi=="2B"){
				conj1 = P1B1;
				conj2 = B2nB1;
				cons = P1B2;
			}
			else if (multi=="2P"){
				var temp = "error";
			}
			var temp1 = "error";
			break;
		case "31n11"://31n11 2P: P1B1 / P2nP1, P2B1
			if(multi=="2B"){
				//
				var temp = "error";
			}
			else if (multi=="2P"){
				conj1 = P1B1;
				conj2 = P2nP1;
				cons = P2B1;
			}
			var temp1 = "error";
			break;
		case "11n31"://11n31 2P: P1B1 / P2nP1, 
			if(multi=="2B"){
				//
				var temp = "error";
			}
			else if (multi=="2P"){
				conj1 = P1B1;
				conj2 = P2nP1;
				cons = P2nB1;
			}
			var temp1 = "error";
			break;
		case "1xn3x"://1xn3x 2P2B: P1B1 P2B2, P2iP1
			if(multi=="2B2P"){
				var temp = "error";
			}
			else if (multi=="2P2B"){
				conj1 = P1B1;
				conj2 = P2B2;
				cons = P2iP1;
			}
			var temp1 = "error";
			break;
		case "x1nx3"://x1nx3 2B2P: P1B1 P2B2, B2iB1
			if(multi=="2B2P"){
				conj1 = P1B1;
				conj2 = P2B2;
				cons = B2iB1;
			}
			else if (multi=="2P2B"){
				var temp = "error";
			}
			var temp1 = "error";
			break;
		case "x3nx1":
			if(multi=="2B2P"){
				conj1 = P1B1;
				conj2 = B2nB1;
				cons = P2B2;
			}
			else if (multi=="2P2B"){
				var temp = "error";
			}
			var temp1 = "error";
			break;
		case "3xn1x":
			if(multi=="2B2P"){
				var temp = "error";
			}
			else if (multi=="2P2B"){
				conj1 = P1B1;
				conj2 = P2nP1;
				cons = P2B2;
			}
			var temp1 = "error";
			break; 
		default:
			conj1=conj2=cons="ERROR!!";
	}
	if (order=="r"){
		var temp = conj1;
		conj1 = conj2;
		conj2 = temp;
	} 

	//take r/o/u?
	//take 11n13,11n31,13n11,31n11,...
	//11n13 2B: P1B1 / B2nB1, P1nB2 
	//13n11 2B: P1B1 / B2nB1, P1B2 
	//31n11 2P: P1B1 / P2nP1, P2B1
	//11n31 2P: P1B1 / P2nP1, P2nB1
	//1xn3x 2P2B: P1B1 P2B2, P2iP1
	//x1nx3 2B2P: P1B1 P2B2, B2iB1
	//x3nx1 2B2P: P1B1 / B2nB1, P2B2
	//3xn1x 2P2B: P1B1 / P2nP1, P2B2
	
	
	return {type: form+"_"+order+"_"+multi, rule: "if ( "+conj1+" ) and ( "+conj2+" ) then ( "+cons+" )."};
}



var ce11n13_nn_o_2B = buildCE("11n13","o","2B");
var ce11n13_nn_r_2B = buildCE("11n13","r","2B");

var ce13n11_np_o_2B = buildCE("13n11","o","2B");
var ce13n11_np_r_2B = buildCE("13n11","r","2B");

var ce31n11_np_o_2P = buildCE("31n11","o","2P");
var ce31n11_np_r_2P = buildCE("31n11","r","2P");

var ce11n31_nn_o_2P = buildCE("11n31","o","2P");
var ce11n31_nn_r_2P = buildCE("11n31","r","2P");

var ce1xn3x_pp_u_2P2B = buildCE("1xn3x","u","2P2B");

var cex1nx3_pp_u_2B2P = buildCE("x1nx3","u","2B2P");

var cex3nx1_np_o_2B2P = buildCE("x3nx1","o","2B2P");
var cex3nx1_np_r_2B2P = buildCE("x3nx1","r","2B2P");

var ce3xn1x_np_o_2P2B = buildCE("3xn1x","o","2P2B");
var ce3xn1x_np_r_2P2B = buildCE("3xn1x","r","2P2B");

//(hopefully) all the CE rules
var CErulesList = [
 ce11n13_nn_o_2B, ce11n13_nn_r_2B, 
 ce13n11_np_o_2B, ce13n11_np_r_2B, 
 ce31n11_np_o_2P, ce31n11_np_r_2P,
 ce11n31_nn_o_2P, ce11n31_nn_r_2P,
 ce1xn3x_pp_u_2P2B,
 cex1nx3_pp_u_2B2P,
 cex3nx1_np_o_2B2P, cex3nx1_np_r_2B2P,
 ce3xn1x_np_o_2P2B, ce3xn1x_np_r_2P2B
];


var tempLink = "http://tinyurl.com/ohleh6j";
//ontographs
var ontoList = [
{type: "11", link: "http://s11.postimg.org/lu6y0uktf/image.png"},
{type: "13", link: "http://s11.postimg.org/m4egk6zfn/image.png"},
{type: "31", link: "http://s11.postimg.org/c8ddkjtnn/image.png"},
{type: "33", link: "http://s11.postimg.org/b8n2ouehv/image.png"}
];

//Turn them into items for IBEX
function ibexItem(onto,CErule){
	var type = onto.type+"-"+CErule.type;//
	var image = "<img src='"+onto.link+" width='480' height='360' >";//html containing ontograph link on google drive? test with http://tinyurl.com/ohleh6j
	var quest = image+"<br>"+CErule.rule;
	var ans = ["Yes","No"];	
	var cor = 1;
	switch(CErule.type.split("_")[0]){
		alert(CErule.type.split("_")[0]);
		case "11n13":
			if (onto.type == "11" || onto.type == "31"){cor=0;}
			break;
		case "13n11":
			if (onto.type == "13" || onto.type == "33"){cor=0;}
			break;
		case "31n11":
			if (onto.type == "31" || onto.type == "33"){cor=0;}
			break;
		case "11n31":
			if (onto.type == "11" || onto.type == "13"){cor=0;}
			break;
		case "1xn3x":
			if (onto.type == "31"){cor=0;}
			break;
		case "x1nx3":
			if (onto.type == "31"){cor=0;}
			break;
		case "x3nx1":
			if (onto.type == "11" || onto.type == "13" || onnto.type == "33"){cor=0;}
			break;
		case "3xn1x":
			if (onto.type == "11" || onto.type == "31" || onto.type == "33"){cor=0;}
			break;
	}
	////testing
	//alert(quest);
	return [ [type, "Question", {"q": quest, "as": ans, "hasCorrect": cor } ] ];
}

function ibexItemsList(ontoList,CErulesList){
	output = [];
	for (o=0;o<ontoList.length;o++){
		for (c=0;c<CErulesList.length;c++){
			output = output.concat(ibexItem(ontoList[o],CErulesList[c]));
			//alert(output);
		}
	}
	//alert(output);
	return output;
}

function wrapper(){
	return ibexItemsList(ontoList,CErulesList);
}


//for testing in browser
document.getElementById("test").innerHTML = "running...";  

document.getElementById("textDiv1").innerHTML = CErulesList;		 
document.getElementById("textDiv2").innerHTML = ce11n13_nn_r_2B.rule ;
document.getElementById("textDiv3").innerHTML = ibexItem(ontoList[0],CErulesList[0]);
document.getElementById("textDiv4").innerHTML = ibexItemsList(ontoList,CErulesList);
