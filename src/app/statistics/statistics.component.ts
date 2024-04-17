import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  numeroFactura: string | undefined;
  facturaConsultada: boolean = false;
  factura: any;
  constructor() { }

  ngOnInit(): void {
  }
  consultarFactura() {
    // Aquí deberías realizar una solicitud HTTP para obtener los detalles de la factura
    // Puedes usar HttpClient de Angular para realizar la solicitud
    // Por ahora, simularemos la consulta de factura con datos estáticos
    this.factura = {
      numero: this.numeroFactura,
      fechaEmision: '05/04/2024',
      total: 100.00
      // Agregar más detalles de la factura según sea necesario
    };
    this.facturaConsultada = true;
  }
}
