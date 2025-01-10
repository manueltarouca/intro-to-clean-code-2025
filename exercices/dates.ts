// @ts-nocheck
class DataLocalizer {
  private static MONTHS: string[] = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  public static getDate(day: number, month: number, year: number): void {
    const normalizedMonth = month - 1;
    if (normalizedMonth < 0 || normalizedMonth > 11) {
      console.error("Mês inválido. Por favor, insira um valor entre 1 e 12.");
      return;
    }
    console.log(`${day} de ${DataLocalizer.MONTHS[normalizedMonth]} de ${year}`);
  }
}

// usage
DataLocalizer.getDate(14, 9, 2017);
DataLocalizer.getDate(12, 1, 2017);
DataLocalizer.getDate(22, 12, 2017);
DataLocalizer.getDate(14, 0, 2017);