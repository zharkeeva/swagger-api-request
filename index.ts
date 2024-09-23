interface Pet {
  id: number;
  name: string;
  status: string;
  category: {
    id: number;
    name: string;
  };
  photoUrls: string[];
  tags?: { id: number; name: string }[];
}

const getPets = async (): Promise<void> => {
  try {
    const response = await fetch(
      "https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available"
    );
    const data: Pet[] = await response.json();

    console.log(JSON.stringify(data, null, 2)); // Более читабельный вывод
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Ошибка при выполнении запроса:", error.message);
    } else {
      console.error("Неизвестная ошибка:", error);
    }
  }
};

window.onload = () => {
  getPets();
};
