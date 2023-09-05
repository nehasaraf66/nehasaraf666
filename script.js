var names=new Array();
names[0]="jonny";
names[1]="John";
names[2]="Jessy";
names[3]="jason";
names[4]="prajal";
names[5]="frank";
names[6]="larry";
names[7]="lura";
names[8]="nishuu";
names[9]="jishuu";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}