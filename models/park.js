const Park = function (name, ticketPrice,) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur) {
    return this.dinosaurs.filter(function (ele) {
        return ele != dinosaur;
    })
}

Park.prototype.getMostPopularDinosaur = function () {
    let mostPopularDinosaur;
    let currentGuestHigh = 0;
    for (var dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > currentGuestHigh) {
            currentGuestHigh = dinosaur.guestsAttractedPerDay;
            mostPopularDinosaur = dinosaur;
        }
    }
    return mostPopularDinosaur;
}

Park.prototype.getDinosaursBySpecies = function (speciesSearch) {
    let dinosaursBySpecies = [];
    for (var dinosaur of this.dinosaurs) {
        if (dinosaur.species === speciesSearch) {
            dinosaursBySpecies.push(dinosaur);
        }
    }
    return dinosaursBySpecies;
}

Park.prototype.calculateVisitorsPerDay = function () {
    let totalVisitorsPerDay = 0;
    for (var dinosaur of this.dinosaurs) {
        totalVisitorsPerDay += dinosaur.guestsAttractedPerDay;
    }
    return totalVisitorsPerDay;
}

Park.prototype.calculateVisitorsPerYear = function () {
    let totalVisitorsPerDay = this.calculateVisitorsPerDay();
    let totalVisitorsPerYear = totalVisitorsPerDay * 365;
    return totalVisitorsPerYear;
}

Park.prototype.calculateTotalRevenue = function () {
    let totalVisitorsPerYear = this.calculateVisitorsPerYear();
    let totalRevenue = totalVisitorsPerYear * this.ticketPrice;
    return totalRevenue;
}

module.exports = Park;