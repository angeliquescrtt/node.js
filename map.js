let holidaysInPhilippines = new Map();

this.set = function(name, date) {
  holidaysInPhilippines.set(name, date);
};

this.get = function(name) {
  return holidaysInPhilippines.get(name);
};

this.forEach = function(callback) {
  holidaysInPhilippines.forEach(callback);
};

this.keys = function() {
  return holidaysInPhilippines.keys();
};

this.values = function() {
  return holidaysInPhilippines.values();
};

this.delete = function(name) {
  holidaysInPhilippines.delete(name);
};

this.set("New Year's Day", "January 1");
this.set("Independence Day", "June 12");
this.set("National Heroes Day", "Last Monday of August");
this.set("Christmas Day", "December 25");

console.log("Holiday on June 12:", this.get("Independence Day"));

console.log("All holidays:");
this.forEach((date, holiday) => {
  console.log(`${holiday} - ${date}`);
});

console.log("All holidays (keys):", this.keys());

console.log("All holiday dates (values):", this.values());

this.delete("National Heroes Day");
console.log("National Heroes Day deleted.");
