export function formatDateToPTBR(date: Date){
    return new Intl.DateTimeFormat('pt-BR').format(date);
}