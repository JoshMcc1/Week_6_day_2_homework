const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {

  beforeEach(function () {
    park = new Park("The National Park", 4.50)
    dinosaur_1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur_2 = new Dinosaur('Triceratops', 'carnivore', 100);
    dinosaur_3 = new Dinosaur("Velociraptor", "carnivore", 120)
    park.dinosaurs = [dinosaur_1, dinosaur_2];

  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "The National Park")
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 4.50)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur_3);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur_2);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = dinosaur_2;
    assert.deepStrictEqual(actual, park.getMostPopularDinosaur())
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    var dinosaursBySpecies = park.getDinosaursBySpecies("t-rex");
    const actual = dinosaursBySpecies.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = 150;
    assert.strictEqual(actual, park.calculateVisitorsPerDay());
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const actual = 54750;
    assert.strictEqual(actual, park.calculateVisitorsPerYear());
  });

  it('should be able to calculate total revenue for one year', function () {
    const actual = 246375;
    assert.strictEqual(actual, park.calculateTotalRevenue());
  });

});
