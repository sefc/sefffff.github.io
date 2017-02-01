//CBM Calculator JAVASCRIPT BEGIN
/*****************************************
(C) http://www.calculator.net all right reserved.
*****************************************/
function gObj(obj) {var theObj;if(document.all){if(typeof obj=="string"){return document.all(obj);}else{return obj.style;}}if(document.getElementById){if(typeof obj=="string"){return document.getElementById(obj);}else{return obj.style;}}return null;}function trimAll(sString){while (sString.substring(0,1) == ' '){sString = sString.substring(1, sString.length);}while (sString.substring(sString.length-1, sString.length) == ' '){sString = sString.substring(0,sString.length-1);} return sString;}function isNumber(val){val=val+"";if (val.length<1) return false;if (isNaN(val)){return false;}else{return true;}}function showquickobjmsg(C,B,A){if(B){C="<font color=red>"+C+"</font>"}gObj(A).innerHTML=C}function calcslab(A){th=trimAll(gObj("slablength").value+"");SG=trimAll(gObj("slablengthunit").value+"");NP=trimAll(gObj("slabwidth").value+"");gd=trimAll(gObj("slabwidthunit").value+"");IB=trimAll(gObj("slabthick").value+"");gE=trimAll(gObj("slabthickunit").value+"");KR=trimAll(gObj("slabquantity").value+"");PL=trimAll((gObj("\x63\x61\x6C\x66\x6F\x6F\x74\x6E\x6F\x74\x65").innerHTML+"").toLowerCase());xE="\x70\x6F\x77\x65\x72\x65\x64\x20\x62\x79\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x63\x61\x6C\x63\x75\x6C\x61\x74\x6F\x72\x2E\x6E\x65\x74\x22\x3E\x63\x61\x6C\x63\x75\x6C\x61\x74\x6F\x72\x2E\x6E\x65\x74\x3C\x2F\x61\x3E";if(PL!=xE){cc="a";return }if(typeof (cc)!="undefined"){return }if(!isNumber(th)){showquickobjmsg("the length need to be numeric",true,A);return }else{if(!isNumber(NP)){showquickobjmsg("the width need to be numeric",true,A);return }else{if(!isNumber(IB)){showquickobjmsg("the thickness or height need to be numeric",true,A);return }else{if(!isNumber(KR)){showquickobjmsg("the quantity need to be numeric",true,A);return }}}}th=parseFloat(th);NP=parseFloat(NP);IB=parseFloat(IB);if((th<0)||(NP<0)||(IB<0)||(KR<0)){showquickobjmsg("all the number need to be positive",true,A);return }if(SG=="foot"){th=th*0.3048}else{if(SG=="inch"){th=th*0.0254}else{if(SG=="yard"){th=th*0.9144}else{if(SG=="centimeter"){th=th*0.01}}}}if(gd=="foot"){NP=NP*0.3048}else{if(gd=="inch"){NP=NP*0.0254}else{if(gd=="yard"){NP=NP*0.9144}else{if(gd=="centimeter"){NP=NP*0.01}}}}if(gE=="foot"){IB=IB*0.3048}else{if(gE=="inch"){IB=IB*0.0254}else{if(gE=="yard"){IB=IB*0.9144}else{if(gE=="centimeter"){IB=IB*0.01}}}}ET=th*NP*IB*KR;gA=ET/0.3048/0.3048/0.3048;PP=ET/0.9144/0.9144/0.9144;bQ=ET*2130;vH=gA*133;ko="<b>Results:</b><br><font color=green><b>"+gA.toPrecision(3)+"</b></font> cubic feet";ko+=" or <font color=green><b>"+PP.toPrecision(3)+"</b></font> cubic yards";ko+=" or <font color=green><b>"+ET.toPrecision(3)+"</b></font> cubic meters";ko+="<br> if pre-mixed concrete*, it is ";ko+=" <font color=green><b>"+vH.toPrecision(3)+"</b></font> lbs";ko+=" or <font color=green><b>"+bQ.toPrecision(3)+"</b></font> kgs";ko+="<br> if 60 lbs per bag, it is <font color=green><b>"+(vH/60).toPrecision(3)+"</b></font> bags";ko+="<br> if 80 lbs per bag, it is <font color=green><b>"+(vH/80).toPrecision(3)+"</b></font> bags";showquickobjmsg(ko,false,A)}function calchole(A){wG=trimAll(gObj("holediameter").value+"");kK=trimAll(gObj("holediameterunit").value+"");Mh=trimAll(gObj("holedepth").value+"");GR=trimAll(gObj("holedepthunit").value+"");Ff=trimAll(gObj("holequantity").value+"");PL=trimAll((gObj("\x63\x61\x6C\x66\x6F\x6F\x74\x6E\x6F\x74\x65").innerHTML+"").toLowerCase());xE="\x70\x6F\x77\x65\x72\x65\x64\x20\x62\x79\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x63\x61\x6C\x63\x75\x6C\x61\x74\x6F\x72\x2E\x6E\x65\x74\x22\x3E\x63\x61\x6C\x63\x75\x6C\x61\x74\x6F\x72\x2E\x6E\x65\x74\x3C\x2F\x61\x3E";if(PL!=xE){cc="a";return }if(typeof (cc)!="undefined"){return }if(!isNumber(wG)){showquickobjmsg("the diameter need to be numeric",true,A);return }else{if(!isNumber(Mh)){showquickobjmsg("the depth or height need to be numeric",true,A);return }else{if(!isNumber(Ff)){showquickobjmsg("the quantity need to be numeric",true,A);return }}}wG=parseFloat(wG);Mh=parseFloat(Mh);Ff=parseFloat(Ff);if((wG<0)||(Mh<0)||(Ff<0)){showquickobjmsg("all the number need to be positive",true,A);return }if(kK=="foot"){wG=wG*0.3048}else{if(kK=="inch"){wG=wG*0.0254}else{if(kK=="yard"){wG=wG*0.9144}else{if(kK=="centimeter"){wG=wG*0.01}}}}if(GR=="foot"){Mh=Mh*0.3048}else{if(GR=="inch"){Mh=Mh*0.0254}else{if(GR=="yard"){Mh=Mh*0.9144}else{if(GR=="centimeter"){Mh=Mh*0.01}}}}ET=Mh*3.14159*wG*wG*Ff/4;gA=ET/0.3048/0.3048/0.3048;PP=ET/0.9144/0.9144/0.9144;bQ=ET*2130;vH=gA*133;ko="<b>Results:</b><br><font color=green><b>"+gA.toPrecision(3)+"</b></font> cubic feet";ko+=" or <font color=green><b>"+PP.toPrecision(3)+"</b></font> cubic yards";ko+=" or <font color=green><b>"+ET.toPrecision(3)+"</b></font> cubic meters";ko+="<br> if pre-mixed concrete*, it is ";ko+=" <font color=green><b>"+vH.toPrecision(3)+"</b></font> lbs";ko+=" or <font color=green><b>"+bQ.toPrecision(3)+"</b></font> kgs";ko+="<br> if 60 lbs per bag, it is <font color=green><b>"+(vH/60).toPrecision(3)+"</b></font> bags";ko+="<br> if 80 lbs per bag, it is <font color=green><b>"+(vH/80).toPrecision(3)+"</b></font> bags";showquickobjmsg(ko,false,A)}function calctube(A){OJ=trimAll(gObj("tubediameter").value+"");ZN=trimAll(gObj("tubediameterunit").value+"");cT=trimAll(gObj("tubeindiameter").value+"");KQ=trimAll(gObj("tubeindiameterunit").value+"");lf=trimAll(gObj("tubedepth").value+"");WL=trimAll(gObj("tubedepthunit").value+"");lY=trimAll(gObj("tubequantity").value+"");PL=trimAll((gObj("\x63\x61\x6C\x66\x6F\x6F\x74\x6E\x6F\x74\x65").innerHTML+"").toLowerCase());xE="\x70\x6F\x77\x65\x72\x65\x64\x20\x62\x79\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x63\x61\x6C\x63\x75\x6C\x61\x74\x6F\x72\x2E\x6E\x65\x74\x22\x3E\x63\x61\x6C\x63\x75\x6C\x61\x74\x6F\x72\x2E\x6E\x65\x74\x3C\x2F\x61\x3E";if(PL!=xE){cc="a";return }if(typeof (cc)!="undefined"){return }if(!isNumber(OJ)){showquickobjmsg("the outer diameter need to be numeric",true,A);return }else{if(!isNumber(cT)){showquickobjmsg("the inner diameter need to be numeric",true,A);return }else{if(!isNumber(lf)){showquickobjmsg("the length or height need to be numeric",true,A);return }else{if(!isNumber(lY)){showquickobjmsg("the quantity need to be numeric",true,A);return }}}}OJ=parseFloat(OJ);cT=parseFloat(cT);lf=parseFloat(lf);if((OJ<0)||(cT<0)||(lf<0)||(lY<0)){showquickobjmsg("all the number need to be positive",true,A);return }if(OJ<cT){showquickobjmsg("the inner diamerter needs to be smaller than outer diamerter",true,A);return }if(ZN=="foot"){OJ=OJ*0.3048}else{if(ZN=="inch"){OJ=OJ*0.0254}else{if(ZN=="yard"){OJ=OJ*0.9144}else{if(ZN=="centimeter"){OJ=OJ*0.01}}}}if(KQ=="foot"){cT=cT*0.3048}else{if(KQ=="inch"){cT=cT*0.0254}else{if(KQ=="yard"){cT=cT*0.9144}else{if(KQ=="centimeter"){cT=cT*0.01}}}}if(WL=="foot"){lf=lf*0.3048}else{if(WL=="inch"){lf=lf*0.0254}else{if(WL=="yard"){lf=lf*0.9144}else{if(WL=="centimeter"){lf=lf*0.01}}}}ET=lf*3.14159*(OJ*OJ-cT*cT)*lY/4;gA=ET/0.3048/0.3048/0.3048;PP=ET/0.9144/0.9144/0.9144;bQ=ET*2130;vH=gA*133;ko="<b>Results:</b><br><font color=green><b>"+gA.toPrecision(3)+"</b></font> cubic feet";ko+=" or <font color=green><b>"+PP.toPrecision(3)+"</b></font> cubic yards";ko+=" or <font color=green><b>"+ET.toPrecision(3)+"</b></font> cubic meters";ko+="<br> if pre-mixed concrete*, it is ";ko+=" <font color=green><b>"+vH.toPrecision(3)+"</b></font> lbs";ko+=" or <font color=green><b>"+bQ.toPrecision(3)+"</b></font> kgs";ko+="<br> if 60 lbs per bag, it is <font color=green><b>"+(vH/60).toPrecision(3)+"</b></font> bags";ko+="<br> if 80 lbs per bag, it is <font color=green><b>"+(vH/80).toPrecision(3)+"</b></font> bags";showquickobjmsg(ko,false,A)};
//JAVASCRIPT END
//nav//
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
//nav end//