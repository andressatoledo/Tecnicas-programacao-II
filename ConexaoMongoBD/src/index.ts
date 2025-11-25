const fs = require("fs");
const path = require("path");

const preps = ["de", "da", "das", "do", "dos", "e"];

function capitalizeName(name: string): string {
  return name
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (preps.includes(word)) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function processCsv(inputFile: string, outputFile: string): void {
  const content = fs.readFileSync(inputFile, "utf-8").trim();
  const lines = content.split(/\r?\n/);

  interface CsvLine {
    line: string;
  }

  const processed: string[] = lines.map((line: CsvLine["line"]) => capitalizeName(line));

  fs.writeFileSync(outputFile, processed.join("\n"), "utf-8");
  console.log(`Arquivo convertido salvo em: ${outputFile}`);
}

// Exemplo de uso
processCsv(
  path.join(__dirname, "nomes.csv"),
  path.join(__dirname, "nomes_convertidos.csv")
);
