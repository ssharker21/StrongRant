var AreaofMath = ["Algebra_1", "Geometry", "Trigonometry", "Algebra_2", "PreCalculus", "Calculus AB", "Calculus BC", "Probability and Statistics", "Differential Equations", "Linear Algebra"];
var SynonymofEasy = ["easy", "invigorating", "uncomplicated", "undemanding", "painless", "effortless", "simple", "elementary", "facile", "straightforward"];

var AreaofMath = AreaofMath[Math.floor(Math.random() * 10)];
var SynonymofEasy = SynonymofEasy[Math.floor(Math.random() * 10)];

var Rant = "THAT " + AreaofMath + " problem was so " + SynonymofEasy + "!"
alert(Rant);
