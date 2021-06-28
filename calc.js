var totalSum = new Array(9).fill(0);
var weightSum = new Array(9).fill(0);

function setGrades() {
    totalSum.fill(0);
    weightSum.fill(0);

    // CW 15% 
    // Total coursework marks: 220
    getMark(0, '40001_1', 60, 0.15 * (60 / 220));
    getMark(0, '40001_2', 100, 0.15 * (100 / 220));
    getMark(0, '40001_3', 60, 0.15 * (60 / 220));
    getMark(0, '40001_4', 100, 0.85);

    // CW 15% 
    // Total coursework marks: 160
    getMark(1, '40002_1', 20, 0.15 * (20 / 160));
    getMark(1, '40002_2', 20, 0.15 * (20 / 160));
    getMark(1, '40002_3', 20, 0.15 * (20 / 160));
    getMark(1, '40002_4', 20, 0.15 * (20 / 160));
    getMark(1, '40002_5', 20, 0.15 * (20 / 160));
    getMark(1, '40002_6', 20, 0.15 * (20 / 160));
    getMark(1, '40002_7', 20, 0.15 * (20 / 160));
    getMark(1, '40002_8', 20, 0.15 * (20 / 160));
    getMark(1, '40002_9', 100, 0.85);

    // CW 15% 
    // Total coursework marks: 50
    getMark(2, '40003_1', 50, 0.15);
    getMark(2, '40003_2', 100, 0.85);

    // CW 15% 
    // Total coursework marks: 30
    getMark(3, '40004_1', 30, 0.15);
    getMark(3, '40004_2', 100, 0.85);

    // CW 15% 
    // Total coursework marks: 170
    getMark(4, '40005_1', 100, 0.15 * (100 / 170));
    getMark(4, '40005_2', 70, 0.15 * (70 / 170));
    getMark(4, '40005_3', 100, 0.85);

    // CW 15% 
    // Total coursework marks: 20
    getMark(5, '40006_1', 20, 0.15);
    getMark(5, '40006_2', 100, 0.85);

    // CW 15% 
    // Total coursework marks: 200
    getMark(6, '40007_1', 100, 0.15 * (100 / 200));
    getMark(6, '40007_2', 100, 0.15 * (100 / 200));
    getMark(6, '40007_3', 100, 0.85);

    // CW 15% 
    // Total coursework marks: 20
    getMark(7, '40008_1', 20, 0.15);
    getMark(7, '40008_2', 100, 0.85);

    // Each mark is quadrupled as 40009 is weighted as 4 courses

    getMark(8, '40009_1', 20, 4 * (5 / 100)); // Haskell Interim 5%
    getMark(8, '40009_2', 30, 4 * (25 / 100)); // Haskell Final 25%

    getMark(8, '40009_3', 100, 4 * (5 / 100)); // Video 5%
    getMark(8, '40009_4', 90, 4 * (5 / 100)); // Report 5%

    getMark(8, '40009_5', 50, 4 * (3 / 100)); // Java Interim A 3%
    getMark(8, '40009_6', 50, 4 * (2 / 100)); // Java Interim B 2%

    getMark(8, '40009_7', 50, 4 * (18 / 100)); // Java Final A 18%
    getMark(8, '40009_8', 50, 4 * (17 / 100)); // Java Final B 17%

    getMark(8, '40009_9', 50, 4 * (1 / 100)); // Checkpoint 1%
    getMark(8, '40009_10', 100, 4 * (12 / 100)); // C Final 12%
    getMark(8, '40009_11', 20, 4 * (3 / 100)); // C Report / Source 3%
    getMark(8, '40009_12', 20, 4 * (1 / 100)); // C Extension
    getMark(8, '40009_13', 20, 4 * (1 / 100)); // C Presentation
    getMark(8, '40009_14', 5, 4 * (1 / 100)); // C Feedback 1
    getMark(8, '40009_15', 5, 4 * (1 / 100)); // C Feedback 2

    var table = document.getElementById('results');

    // Clear table
    table.innerHTML = `<tr>
            <th>Module</th>
            <th>Weighted Total</th>
            <th>Weight Sum</th>
            <th>Percentage</th>
        </tr>
        <tr><th><br></th></tr>`

    for (i = 0; i < totalSum.length; i++) {
        let module = i + 40001;
        let sum = totalSum[i];
        let weight = weightSum[i];
        let percentage = "";

        if (weightSum[i]) {
            percentage = ((totalSum[i] / weightSum[i]) * 100).toFixed(2) + "%";
        }

        table.innerHTML += getRow(module, sum, weight, percentage);
    }

    // Add blank row
    table.innerHTML += '<tr><th><br></th></tr>'

    let tsum = totalSum.reduce((a, b) => a + b, 0);
    let wsum = weightSum.reduce((a, b) => a + b, 0);
    let percentage = "";

    if (wsum) {
        percentage = ((tsum / wsum) * 100).toFixed(2) + "%";
    }

    table.innerHTML += getRow("Overall", tsum, wsum, percentage);
}

function getRow(module, sum, weight, percentage) {
    return `<tr>
        <th>${module}</th>
        <th>${sum.toFixed(2)}</th>
        <th>${weight.toFixed(2)}</th>
        <th>${percentage}</th>
    </tr>`
}

function getMark(module, id, max, weight) {
    var result = parseInt(document.getElementById(id).value) / max;

    if (!isNaN(result) && max != 0) {
        weightSum[module] += weight;
        totalSum[module] += result * weight;
    }
}