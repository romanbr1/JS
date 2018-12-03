function Robot(name, works) {

	this.name = name;
	this.works = works;
}

Robot.prototype.work = function() {
	console.log('Im a ' + this.name + ' - Im ' + this.works);
}

function CoffeRobot(name, works) {
	Robot.call(this, name, works);
}
CoffeRobot.prototype = Object.create(Robot.prototype);

function RobotDancer(name, works) {
	Robot.call(this, name, works);
}
RobotDancer.prototype = Object.create(Robot.prototype);

function RobotCoocker(name, works) {
	Robot.call(this, name, works);
}
RobotCoocker.prototype = Object.create(Robot.prototype);

var r = new Robot('Robot', 'just work');
var cfr = new CoffeRobot('CoffeRobot', 'make coffee');
var dnr = new RobotDancer('RobotDancer', 'just dance');
var ckr = new RobotCoocker('RobotCoocker', 'just cook');

var robots = [];
robots.push(r, cfr, ckr, dnr);
for (i = 0; i < robots.length; i++) {
	robots[i].work();
}
