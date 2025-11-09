import { useState, useEffect } from "react";
import "./styles.css";

interface Animal {
  id: string;
  url: string;
  width: number;
  height: number;
}

function AnimalsList(){
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );

        if (!response.ok) {
          throw new Error("Erro ao carregar os animais");
        }

        const data: Animal[] = await response.json();
        setAnimals(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  // Função para dividir os animais em grupos de 3
  const chunkAnimals = (animals: Animal[], size: number): Animal[][] => {
    const maxAmountImages = 9;
    const chunks: Animal[][] = [];
    for (let i = 0; i < animals.length; i += size) {
      if (i < maxAmountImages) {
        chunks.push(animals.slice(i, i + size));
      }
    }
    return chunks;
  };

  if (loading) {
    return (
      <div className="animals-list-container">
        <div className="loading">Carregando animais...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="animals-list-container">
        <div className="error">Erro: {error}</div>
      </div>
    );
  }

  const animalRows = chunkAnimals(animals, 3);

  return (
    <section className="animals-list">
    <div className="animals-list-container"> 
      {animalRows.map((row, rowIndex) => (
        <div key={rowIndex} className="animals-row">
          {row.map((animal) => (
            <div key={animal.id} className="animal-card">
              <img
                src={animal.url}
                alt={`Animal ${animal.id}`}
                className="animal-image"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
    </section>
  );
};

export default AnimalsList;
