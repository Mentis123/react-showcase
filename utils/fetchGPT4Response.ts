// utils/fetchGPT4Response.ts
import axios from 'axios';

const fetchGPT4Response = async (inputText: string): Promise<string> => {
  const API_URL = 'https://api.example.com/v1/your-gpt-4-endpoint'; // Replace with the actual GPT-4 API URL
  const API_KEY = 'your_api_key'; // Replace with your actual API key

  try {
    const response = await axios.post(
      API_URL,
      {
        input: inputText,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data.output || 'No response from the model.';
  } catch (error) {
    console.error('Error fetching GPT-4 response:', error);
    return 'Error fetching GPT-4 response.';
  }
};

export default fetchGPT4Response;
