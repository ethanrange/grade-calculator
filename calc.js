var totalSum = 0;
var weightSum = 0;

function setGrades() {
    totalSum = 0;
    weightSum = 0;

    getMark('40001_1', 60, 0.15 * 3 / 11);
    getMark('40001_2', 100, 0.15 * 5 / 11);
    getMark('40001_3', 60, 0.15 * 3 / 11);

    getMark('40002_1', 20, 0.15 * 1 / 8);
    getMark('40002_2', 20, 0.15 * 1 / 8);
    getMark('40002_3', 20, 0.15 * 1 / 8);
    getMark('40002_4', 20, 0.15 * 1 / 8);
    getMark('40002_5', 20, 0.15 * 1 / 8);
    getMark('40002_6', 20, 0.15 * 1 / 8);
    getMark('40002_7', 20, 0.15 * 1 / 8);
    getMark('40002_8', 20, 0.15 * 1 / 8);

    getMark('40003_1', 50, 0.15 * 1);

    getMark('40004_1', 30, 0.15 * 1);

    getMark('40005_1', 100, 0.15 * 10 / 17);
    getMark('40005_2', 70, 0.15 * 7 / 17);

    getMark('40006_1', 20, 0.15 * 1);

    getMark('40007_1', 100, 0.15 * 1 / 2);
    getMark('40007_2', 0, 0.15 * 1 / 2); //BLANK

    getMark('40008_1', 0, 0.15 * 1); //BLANK

    getMark('40009_1', 20, 15 / 100);
    getMark('40009_2', 30, 75 / 100);
    getMark('40009_3', 100, 15 / 100);
    getMark('40009_4', 90, 105 / 100);
    getMark('40009_5', 0, 24 / 100); //BLANK
    getMark('40009_6', 0, 36 / 100); //BLANK
    getMark('40009_7', 0, 24 / 100); //BLANK
    getMark('40009_8', 0, 36 / 100); //BLANK

    var tsum = document.getElementById('tsum');
    var tweight = document.getElementById('tweight');
    var wsum = document.getElementById('wsum');

    tsum.innerHTML = "Weighted Mark Sum: " + (totalSum).toFixed(2);
    tweight.innerHTML = "Weight Sum: " + (weightSum).toFixed(2);
    wsum.innerHTML = weightSum == 0 ? "Average: " : "Average: " + (totalSum / weightSum).toFixed(4) * 100 + "%";
}

function getMark(id, max, weight) {
    var result = parseInt(document.getElementById(id).value) / max;

    if (!isNaN(result) && max != 0) {
        weightSum += weight;
        totalSum += result * weight;
    }
}