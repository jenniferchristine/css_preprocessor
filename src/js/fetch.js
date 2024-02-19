"use strict";

var ctx = document.getElementById('barChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['#1', '#2', '#3', '#4', '#5', '#6'],
        datasets: [{
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2, 3, 10],
            backgroundColor: 'rgb(97, 181, 250)',
            borderColor: 'rgb(75, 142, 196)',
        },
        {
            label: 'Dataset 2',
            data: [15, 8, 25, 7, 14, 10, 5],
            backgroundColor: 'rgb(174, 213, 164)',
            borderColor: 'rgb(120, 146, 113)',
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