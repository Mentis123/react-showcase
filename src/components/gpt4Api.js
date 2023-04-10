// gpt4Api.js
export async function generateChatCompletion(userInput) {
  const API_KEY = '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';
  const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  };

  const messages = [
    { role: 'system', content: 'Act like an expert in all relevant and associated fields.' },
    { role: 'system', content: 'Before responding, please pre-process this analysis of what is relevant and associated and apply this context.' },
    { role: 'user', content: userInput },
  ];

  const data = {
    model: 'gpt-4',
    messages: messages,
    temperature: 1,
  };

  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const result = await response.json();
    return result.choices[0].message.content;
  } else {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
}
