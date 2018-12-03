function Robot(name, works) {
	
	this.name=name;
	this.works=works;
	this.work= function() {
		console.log('Im a '+ this.name+' - Im '+this.works);
	}
}
function CoffeRobot(name,works) {	
	Robot.call(this,name,works);
}
function RobotDancer(name,works) {	
	Robot.call(this,name,works);
}
function RobotCoocker(name,works) {	
	Robot.call(this,name,works);
}
var r= new Robot('Robot', 'just work');
var cfr= new CoffeRobot('CoffeRobot', 'make coffee');
var dnr= new RobotDancer('RobotDancer', 'just dance');
var ckr= new RobotCoocker('RobotCoocker', 'just cook');
var robots=[];
robots.push(r,cfr,ckr,dnr);
for(i=0;i<robots.length;i++){
	robots[i].work();
}


