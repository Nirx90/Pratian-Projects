var fooditem = ['chiken', 'Pizza', 'Jalebi', 'fafda'];
function say() {
    console.log('array function');
}
fooditem.forEach(function (item, index) {
    console.log("".concat(index + 1, " .").concat(item, " "));
});
