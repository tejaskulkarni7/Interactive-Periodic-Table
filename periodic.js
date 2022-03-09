particle=new Array();particle["H"]= 1.008;particle["He"]= 4.003;particle["Li"]= 6.941;particle["Be"]= 9.012;particle["B"]= 10.811;particle["C"]= 12.01;particle["N"]= 14.01;
particle["O"]= 15.9994;particle["F"]= 18.9984;particle["Ne"]= 20.18;particle["Na"]= 22.99;particle["Mg"]= 24.31;particle["Al"]=26.98;particle["Si"]= 28.09;particle["P"]= 30.97;
particle["S"]= 32.066;particle["Cl"]= 35.45;particle["Ar"]= 39.95;particle["K"]= 39.10;particle["Ca"]= 40.08;particle["Sc"]= 44.96;particle["Ti"]= 47.87;particle["V"]= 50.94;
particle["Cr"]= 51.996;particle["Mn"]= 54.94;particle["Fe"]= 55.85;particle["Co"]= 58.93;particle["Ni"]= 58.69;particle["Cu"]= 63.55;particle["Zn"]= 65.38;particle["Ga"]= 69.72;
particle["Ge"]= 72.63;particle["As"]= 74.92;particle["Se"]= 78.97;particle["Br"]= 79.90;particle["Kr"]= 83.80;particle["Rb"]= 85.47;particle["Sr"]= 87.62;particle["Y"]= 88.91;
particle["Zr"]= 91.22;particle["Nb"]= 92.91;particle["Mo"]= 95.95;particle["Tc"]= 97.91;particle["Ru"]= 101.07;particle["Rh"]= 102.91;particle["Pd"]= 106.42;particle["Ag"]= 107.87;
particle["Cd"]= 112.41;particle["In"]= 114.82;particle["Sn"]= 118.71;particle["Sb"]= 121.76;particle["Te"]= 127.60;particle["I"]= 126.90;particle["Xe"]= 131.29;particle["Cs"]= 132.91;
particle["Ba"]= 137.33;particle["La"]= 138.91;particle["Hf"]= 178.49;particle["Ta"]= 180.95;particle["W"]= 183.84;particle["Re"]= 186.21;particle["Os"]= 190.23;particle["Ir"]= 192.22;
particle["Pt"]= 195.08;particle["Au"]= 196.97;particle["Hg"]= 200.59;particle["Tl"]= 204.38;particle["Pb"]= 207.20;particle["Bi"]= 208.98;particle["Po"]= 208.98;particle["At"]= 209.99;
particle["Rn"]= 222.02;particle["Fr"]= 223.02;particle["Ra"]= 226.03;particle["Ac"]= 227.03;particle["Rf"]= 267.12;particle["Db"]= 268.13;particle["Sg"]= 271.13;particle["Bh"]= 270.13;
particle["Hs"]= 277.15;particle["Mt"]= 278.16;particle["Ds"]= 281.17;particle["Rg"]= 282.17;particle["Cn"]= 285.18;particle["Nh"]= 286.19;particle["Fl"]= 289.19;particle["Mc"]= 289.19;
particle["Lv"]= 293.20;particle["Ts"]= 294.21;particle["Og"]= 294.21;particle["Cn"]= 285.18;particle["Ce"]= 140.12;particle["Pr"]= 140.91;particle["Nd"]= 144.24;particle["Pm"]= 144.91;
particle["Sm"]= 150.36;particle["Eu"]= 151.96;particle["Gd"]= 157.25;particle["Tb"]= 158.93;particle["Dy"]= 162.50;particle["Ho"]= 164.93;particle["Er"]= 167.26;particle["Tm"]= 168.93;
particle["Yb"]= 173.05;particle["Lu"]= 174.97;particle["Th"]= 232.04;particle["Pa"]= 231.04;particle["U"]= 238.03;particle["Np"]= 237.05;particle["Pu"]= 244.06;particle["Am"]= 243.06;
particle["Cm"]= 247.07;particle["Bk"]= 247.07;particle["Cf"]= 251.08;particle["Es"]= 252.08;particle["Fm"]= 257.10;particle["Md"]= 258.10;particle["No"]= 259.10;particle["Lr"]= 266.12;
uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";lowercase="abcdefghijklmnopqrstuvwxyz";number="0123456789";

function getMolarMass(ChemFormula)
{

	total=new Array(); 
	level=0; 
	total[0]=0; 
	i=0; mass=0; 
	name=''; 
	precision=8;
	elmass=new Array();
	for (i=0; i<elmass.length;i++) 
	{
		elmass[i]=null;
	}
	elmass[0]=new Array();
	for (i=0; i<elmass[0].length;i++) 
	{
		elmass[0][i]=0;
	}
	i=0;

	while (ChemFormula.charAt(i)!="")
	{
	
		//alert(ChemFormula.charAt(i));
		//alert((uppercase+lowercase+number+"()").indexOf(ChemFormula.charAt(i)));

			if ((uppercase+lowercase+number+"()").indexOf(ChemFormula.charAt(i))==-1)				
			i++;
			while (ChemFormula.charAt(i)=="(") {
				level++;
				i++;
				total[level]=0;
				elmass[level]=new Array();
			for (h=0; i<elmass[level].length;h++) {
				elmass[level][i]=0;
			}

			}
			if (ChemFormula.charAt(i)==")")
			{
				mass=total[level];
				name='';
				level--;
			}
			else if
			(uppercase.indexOf(ChemFormula.charAt(i))!=-1)
			{
				name=ChemFormula.charAt(i);
				while (lowercase.indexOf(ChemFormula.charAt(i+1))!=-1 && ChemFormula.charAt(i+1)!="")
				name+=ChemFormula.charAt(++i);
				mass=particle[name];
				massStr=mass+"";
				if (massStr.indexOf(".")!=-1)
				{
					masspercis=(massStr.substring(massStr.indexOf(".")+1,massStr.length)).length;
				}	
				else
				{
					masspercis=0;
					precision=(precision==8 || precision>masspercis)?masspercis:precision;
				}					
			}
			var amount="";
			while (number.indexOf(ChemFormula.charAt(i+1))!=-1 && ChemFormula.charAt(i+1)!="")
			amount+=ChemFormula.charAt(++i);
			if (amount=="") amount="1";
			{alert(amount);
			total[level]+=mass*parseInt(amount);}
			if (name=="")
			{
				for (ele in elmass[level+1])
				{
				totalnumber=parseInt(elmass[level+1][ele])*amount
					if (elmass[level][ele]==null)
					elmass[level][ele]=totalnumber;
					else
					elmass[level][ele]=totalnumber+parseInt(elmass[level][ele]);
				}
			}
			else
			{
				if (elmass[level][name]==null)
				elmass[level][name]=amount;
				else
				elmass[level][name]=parseInt(elmass[level][name])+parseInt(amount);
			}
			i++;
	}
	weight=rounded(total[0],precision);
	previous="";
	var str = '';
	str += "<p>"+document.forms[0].elements[0].value+":"+"</p>";
	for (ele in elmass[0])
	{
		eltotal=eval(elmass[0][ele]*particle[ele]);
		str += "<p>"+elmass[0][ele]+" "+ele+" * "+particle[ele]+" = "+eltotal+""+"</p>";
	}
	 str += ""+"<br\>"+previous;
	 str += "<p>"+"Total: "+weight+" g/mol"+"</p>";
	 str += ""+previous;


	document.getElementById("displaydiv").innerHTML = str;
	document.forms[0].elements[0].value='';
	document.forms[0].elements[0].focus();
}

function rounded(number,precision)
{
	return Math.round(number*Math.pow(10,precision))/Math.pow(10,precision);
}

