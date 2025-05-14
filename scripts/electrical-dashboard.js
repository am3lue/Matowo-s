  // Initialize dashboard
  const dashboard = {
    init() {
      this.initCharts();
      this.bindEvents();
      this.loadData();
    },

    async loadData() {
      try {
        const dateRange = document.getElementById('date-range').value;
        const response = await fetch(`/api/electrical-data?range=${dateRange}`);
        const data = await response.json();
        this.updateDashboard(data);
      } catch (error) {
        console.error('Error loading electrical data:', error);
      }
    },

    initCharts() {
      const powerCtx = document.getElementById('power-chart').getContext('2d');
      const powerChart = new Chart(powerCtx, {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: 'Power (kW)',
            data: [],
            borderColor: '#2196f3',
            tension: 0.4
          }]
        }
      });

      const voltageCtx = document.getElementById('voltage-chart').getContext('2d');
      const voltageChart = new Chart(voltageCtx, {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: 'Voltage (V)',
            data: [],
            borderColor: '#4caf50',
            tension: 0.4
          }]
        }
      });

      this.charts = {
        power: powerChart,
        voltage: voltageChart
      };
    },

    updateDashboard(data) {
      // Update charts with new data
      this.charts.power.data.labels = data.timestamps;
      this.charts.power.data.datasets[0].data = data.powerReadings;
      this.charts.power.update();

      this.charts.voltage.data.labels = data.timestamps;
      this.charts.voltage.data.datasets[0].data = data.voltageReadings;
      this.charts.voltage.update();

      // Update summary statistics
      document.getElementById('peak-power').textContent = `${Math.max(...data.powerReadings)} kW`;
      document.getElementById('avg-power').textContent = `${(data.powerReadings.reduce((a,b) => a + b, 0) / data.powerReadings.length).toFixed(2)} kW`;
      document.getElementById('peak-voltage').textContent = `${Math.max(...data.voltageReadings)} V`;
      document.getElementById('avg-voltage').textContent = `${(data.voltageReadings.reduce((a,b) => a + b, 0) / data.voltageReadings.length).toFixed(2)} V`;
    },

    bindEvents() {
      // Refresh data periodically
      setInterval(() => this.loadData(), 60000);

      // Handle date range changes
      document.getElementById('date-range').addEventListener('change', () => {
        this.loadData();
      });
    }
  };

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    dashboard.init();
  });
