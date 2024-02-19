"use strict";

window.onload = async () => {
    const url = "https://studenter.miun.se/~mallar/dt211g/";
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();

            const coursesHT23 = data.filter(course => course.admissionRound === "HT2023");
            coursesHT23.sort((a, b) => parseInt(b.applicantsTotal) - parseInt(a.applicantsTotal));

            const top5Courses = coursesHT23.slice(0, 5);
            const programNames = top5Courses.map(course => course.name);
            const applicantsTotal = top5Courses.map(course => parseInt(course.applicantsTotal));

            updateBarChartWithData(programNames, applicantsTotal);
            updateRoundChartWithData(programNames, applicantsTotal);

        } else {
            console.error("ERROR: " + response.statusText);
        }
    } catch (error) {
        console.error("Issue regarding fetch operation:", error);
    }
}

function updateBarChartWithData(data, totalApplicants) {
    const ctx = document.getElementById('barChart');
    const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data,
            datasets: [{
                label: 'Antal Sökande',
                data: totalApplicants,
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

function updateRoundChartWithData(data, totalApplicants) {
    const ctx = document.getElementById('doughnutChart');
    const doughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data,
            datasets: [{
                label: 'Antal Sökande',
                data: totalApplicants,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
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
}