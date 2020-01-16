export interface DetalhesConcurso {
    numero: number;
    dataSorteio: Date,
    dezenas: number[];
    arrecadacaoTotal: number;
    numeroGanhadoresSena: number;
    cidades: string;
    estados: string;
    rateioSena: number;
    numeroGanhadoresQuina: number;
    rateioQuina: number;
    numeroGanhadoresQuadra: number;
    rateioQuadra: number;
    acumulado: boolean;
    valorAcumulado: number;
    estimativaPremio: number;
    acumuladoMegaDaVirada: number;
}