// Bar graph data and configuration
// Select the canvas element for the graph
const ctx = document.getElementById('weekly-schedule').getContext('2d');

// Create the bar graph using Chart.js
const weeklyScheduleChart = new Chart(ctx, {
    type: 'bar', // Chart type
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // X-axis labels
        datasets: [{
            label: 'Hours Spent', // Legend label
            data: [2, 4, 3, 5, 6, 1, 2], // Y-axis data
            backgroundColor: [
                'rgba(31, 203, 255, 1)', // Colors for bars
                'rgba(31, 203, 255, 1)',
                'rgba(31, 203, 255, 1)',
                'rgba(31, 203, 255, 1)',
                'rgba(31, 203, 255, 1)',
                'rgba(31, 203, 255, 1)',
                'rgba(31, 203, 255, 1)'
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true, // Adjust to container size
        maintainAspectRatio: false, // Allow custom height/width
        scales: {
            y: {
                beginAtZero: true, // Start Y-axis at 0
                ticks: {
                    color: 'black',
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.2)',
                },
                title: {
                    display: true,
                    text: 'Hours Spent', // Y-axis label
                    color: 'black'
                }
            },
            x: {
                ticks: {
                    color: 'black',
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0)',
                },
                title: {
                    display: true,
                    text: 'Days of the Week', // X-axis label
                    color: 'black'
                }
            }
        },
        plugins:{
            legend: {
                labels:{
                    color: 'black'
                }
            }
        }
    }
});

