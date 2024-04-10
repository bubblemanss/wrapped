document.addEventListener('DOMContentLoaded', () => {
  // Mock data (replace with actual data from backend)
  const data = {
    labels: ['Applied', 'Rejected', 'Recruiter Call', 'Tech Screen', 'Onsite', 'Offer'],
    datasets: [{
      label: 'Job Application Statuses',
      data: [133, 60, 21, 17, 6, 2],
      backgroundColor: [
        'rgba(220, 220, 220, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
      ],
      borderColor: [
        'rgba(220, 220, 220, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    }]
  };

  const ctx = document.getElementById('chartCanvas').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
