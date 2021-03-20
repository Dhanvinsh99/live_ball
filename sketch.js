const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine1, world;
var ground1;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionheight = 300;
var particle;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  ground1 = new ground(400, 800, 800, 20);
  for (let k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionheight / 2, 10, divisionheight));

  }

  for (let j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinkos(j, 75));
  }

  for (let j = 50; j <= width-10; j = j + 50) {
    plinkos.push(new Plinkos(j, 175));
  }

  for (let j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinkos(j, 275));
  }

  for (let j = 50; j <= width-10; j = j + 50) {
    plinkos.push(new Plinkos(j, 375));
  }

  if (frameCount % 90 === 0) {
    particles.push(new Particles(random(width / 2 - 10, width / 2 + 10), 10, 10));
  }

}

function draw() {
  background(0, 0, 0);
  Engine.update(engine)
  ground1.display();
  console.log(divisions)
  for (var k = 0; k <= divisions.length; k = k + 1) {
    divisions[k].display()
  }

  // for (let j = 0; j <= particles.length; j = j + 1) {
  //   particles[j].display();
  // }

  // for (let h = 0; h <= plinkos.length; h = h + 1) {
  //   plinkos[h].display();
  // }

  drawSprites();
}