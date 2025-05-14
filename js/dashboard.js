
// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard components
    initializeCharts();
    initializeDataTables();
    setupEventListeners();
});

function initializeCharts() {
    // Sample chart using Chart.js
    const ctx = document.getElementById('dashboardChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Monthly Statistics',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function initializeDataTables() {
    // Initialize data tables with sample data
    $('#dashboardTable').DataTable({
        pageLength: 10,
        responsive: true,
        order: [[0, 'desc']],
        language: {
            search: "Filter records:"
        }
    });
}

function setupEventListeners() {
    // Dashboard filter handlers
    document.getElementById('dateFilter').addEventListener('change', function(e) {
        updateDashboardData(e.target.value);
    });

    // Refresh button handler
    document.getElementById('refreshDashboard').addEventListener('click', function() {
        refreshDashboardData();
    });
}

function updateDashboardData(filterValue) {
    // Update dashboard based on filter
    fetch('/api/dashboard/data?filter=' + filterValue)
        .then(response => response.json())
        .then(data => {
            updateCharts(data);
            updateTables(data);
        })
        .catch(error => console.error('Error updating dashboard:', error));
}

function refreshDashboardData() {
    // Refresh all dashboard components
    initializeCharts();
    initializeDataTables();
}

function updateCharts(data) {
    // Update charts with new data
    const chart = Chart.getChart('dashboardChart');
    if (chart) {
        chart.data.datasets[0].data = data.chartData;
        chart.update();
    }
}

function updateTables(data) {
    // Update tables with new data
    const table = $('#dashboardTable').DataTable();
    table.clear();
    table.rows.add(data.tableData);
    table.draw();
}
