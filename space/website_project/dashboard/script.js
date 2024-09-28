document.addEventListener('DOMContentLoaded', () => {
    // Fetch real-time data (simulate with timeout)
    setTimeout(() => {
      document.getElementById('spaceWeatherStatus').innerText = "Solar Activity: Moderate | Geomagnetic Storm: Active";
    }, 2000);
  
    // Sample data for solar flare activity
    const flareChartData = [10, 12, 8, 20, 16];
    const ctx = document.getElementById('flareChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
        datasets: [{
          label: 'Solar Flare Activity',
          data: flareChartData,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Activity Level'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Days'
            }
          }
        }
      }
    });
  
    // Sample data for historical trends
    const historicalCtx = document.getElementById('historicalChart').getContext('2d');
    new Chart(historicalCtx, {
      type: 'bar',
      data: {
        labels: ['2020', '2021', '2022', '2023'],
        datasets: [{
          label: 'Geomagnetic Storms per Year',
          data: [3, 5, 4, 6],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Storms'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Year'
            }
          }
        }
      }
    });
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    const widgets = document.querySelectorAll('.widget');
    widgets.forEach((widget, index) => {
        widget.style.animationDelay = `${index * 0.2}s`; // Adjust delay for each widget
        widget.classList.add('animate');
    });
});
