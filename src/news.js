const url =
  'http://newsapi.org/v2/top-headlines?country=in&apiKey=00bb6f35ed7f4857bb279d75a081a55e';

export async function getNews() {
  try { 
    const response = await fetch(url).then(response => response.json()).articles;
    console.log(response)
    return response;
  } catch (error) {
    throw error;
  }
}
