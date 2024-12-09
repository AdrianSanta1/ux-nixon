import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createPieChart();
    this.createLineChart();
    this.createBarChart();
    this.createGroupedBarChart();
  }

  // Gráfico Circular
  createPieChart(): void {
    new Chart('pieChart', {
      type: 'doughnut',
      data: {
        labels: ['Hipotecarios', 'Tarjetas de Crédito'],
        datasets: [
          {
            data: [850, 420],
            backgroundColor: ['#4caf50', '#ff9800'],
            hoverOffset: 4
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Distribución de Créditos Aprobados'
          }
        }
      }
    });
  }

  createLineChart(): void {
    new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
          {
            label: 'Solicitudes Aprobadas',
            data: [200, 300, 400, 500, 600, 700],
            borderColor: '#673ab7',
            backgroundColor: 'rgba(103, 58, 183, 0.2)',
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Evolución Mensual de Solicitudes'
          }
        }
      }
    });
  }

  // Gráfico de Barras
  createBarChart(): void {
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Aprobados', 'Pendientes', 'Rechazados'],
        datasets: [
          {
            label: 'Estado de Solicitudes',
            data: [850, 320, 110],
            backgroundColor: ['#4caf50', '#ffeb3b', '#f44336']
          }
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Estados de Solicitudes'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createGroupedBarChart(): void {
    new Chart('groupedBarChart', {
      type: 'bar',
      data: {
        labels: ['Bogotá', 'Medellín', 'New York', 'Londres', 'París'],
        datasets: [
          {
            label: 'Empresariales',
            data: [300, 250, 180, 150, 120],
            backgroundColor: '#4caf50',
          },
          {
            label: 'Normales',
            data: [150, 180, 220, 200, 180],
            backgroundColor: '#2196f3',
          }
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Distribución de Clientes',
            font: {
              size: 18
            }
          },
          legend: {
            position: 'top',
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Ciudades'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Cantidad de Clientes'
            }
          }
        }
      }
    });
  }
}
