var ctx = document.getElementById('languagePiechart').getContext('2d');
var pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["JavaScript", "PHP", "Python", "Java"],
        datasets: [{
            data: [27, 53, 7, 13],
            backgroundColor: [
                "#f1e05a", "#4f5d95", "#3572a5", "#b07219"
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: true,
            fullWidth: true,
            labels: {
                fontColor: "#fff",
                fontSize: 16,
                fontFamily: "Raleway"
            }
        },
        title: {
            display: true,
            text: "How Frequently I Program in Each Language",
            fontSize: 24,
            fontColor: "white",
            fontFamily: "Raleway"
        },
        tooltips: {
            enabled: false
        },
        responsive: true
    }
});
