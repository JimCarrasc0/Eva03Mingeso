import axios from 'axios';

const getQuestions = async () => {
  try {
    const response = await axios.get("http://localhost:1234/question");
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default { getQuestions };