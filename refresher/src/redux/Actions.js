import axios from 'axios';

const mockDataResponse = {
  status: 200,
  data: ['Operational', 'Security', 'Reliability', 'Performance', 'Cost']
}
export const getMockData = () => async (dispatch) => {
  try {
    // const response = await axios.get('/principles')
    let {data} = mockDataResponse;
    console.log(data);
    dispatch({
      type: 'GET_PRINCIPLES',
      payload: data
    })
  } catch (error) {
    console.log(error.message);
    console.log("GET PRINCIPLES ERROR");
  }
}