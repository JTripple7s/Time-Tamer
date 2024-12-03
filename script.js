
const barChartCtx = document.getElementById('weekly-schedule').getContext('2d');
const doughnutChartCtx = document.getElementById('activity-donut').getContext('2d');

const weeklyScheduleChart = new Chart(barChartCtx, {
    type: 'bar', // Chart type
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // X-axis labels
        datasets: [
            {
                label: 'Extracurricular', // activity
                data: [1, 1.5, 2, 1, 2.5, 0, 0], // Hours for activity
                backgroundColor: 'rgba(31, 203, 255, 1)', // Color for bars

            },
            {
                label: 'Study',
                data: [3, 4, 2, 3.5, 4, 1, 2],
                backgroundColor: 'rgba(255, 99, 132, 1)', 

            },
            {
                label: 'Leisure', 
                data: [2, 2.5, 3, 1.5, 2, 4, 5],
                backgroundColor: 'rgba(75, 192, 192, 1)', 

            },
            {
                label: 'sleep',
                data: [8, 8, 8, 8, 8, 8, 8], 
                backgroundColor: 'rgba(131, 203, 255, 1)', 
            }
        ]
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
                stacked: true,
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
                stacked: true,
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

const doughnutChart = new Chart(doughnutChartCtx, {
    type: 'doughnut',
    data: {
        labels: ['Extracurricular', 'Study', 'Leisure', 'sleep'],
        datasets: [
            {
                label: 'Activity Distribution',
                data: [10, 20, 15, 56], // Total hours for each activity
                backgroundColor: [
                    'rgba(31, 203, 255, 1)', // Extracurricular color
                    'rgba(255, 99, 132, 1)', // Study color
                    'rgba(75, 192, 192, 1)',
                    'rgba(131, 203, 255, 1)'  // Leisure color
                ],
                hoverOffset: 4 // Adds an offset when hovering
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { labels: { color: 'black' } },
            tooltip: { enabled: true }
        }
    }
});

// Function to handle the submission of activity and time
// probably not gunna have functionality
function addActivity() {

    const activity = document.getElementById('activity').value;
    const time = parseFloat(document.getElementById('time').value);
    
    if (!activity || isNaN(time) || time <= 0) {
        alert("Please enter valid activity and time.");
        return;
    }
    
    // Display the entered activity and time in the console for now
    console.log(`Activity: ${activity}, Time Spent: ${time} hours`);
    
    document.getElementById('activity').value = '';
    document.getElementById('time').value = '';
}


