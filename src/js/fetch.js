"use strict";

window.onload = async () => {
    const url = "https://studenter.miun.se/~mallar/dt211g/";
    try {
        const response = await fetch(url);

        if (response.ok) {

            const data = await response.json();
            const coursesHT23 = data.filter(course => course.admissionRound === "HT2023");
            coursesHT23.sort((a, b) => parseInt(b.applicantsTotal) - parseInt(a.applicantsTotal));
            const top6Courses = coursesHT23.slice(0, 6);

            updateChartWithData(top6Courses);

        } else {
            console.error("ERROR: " + response.statusText);
        }
    } catch (error) {
        console.error("Issue regarding fetch operation:", error);
    }
}

function updateChartWithData(data) {
    const courseNames = data.map(course => course.name);
    const applicantsTotal = data.map(course => parseInt(course.applicantsTotal));

    const ctx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: courseNames,
            datasets: [{
                label: 'Antal Sökande',
                data: applicantsTotal,
                backgroundColor: 'rgba(35, 87, 161)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

var ctx = document.getElementById('doughnutChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['#1', '#2', '#3', '#4', '#5'],
        datasets: [{
            label: '# of Votes',
            data: [20, 20, 20, 20, 20],

            backgroundColor: [
                'rgb(35, 87, 161)',
                'rgb(174, 213, 164)',
                'rgb(97, 181, 250)',
                'rgb(25, 144, 168)',
                'rgb(32, 185, 216)'
            ],
            borderColor: [
                'rgb(29, 75, 141)',
                'rgb(120, 146, 113)',
                'rgb(75, 142, 196)',
                'rgb(19, 107, 125)',
                'rgb(23, 138, 161)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});