import axios from 'axios';

const mockDataResponse = {
  status: 200,
  data: ['Operational', 'Security', 'Reliability', 'Performance', 'Cost']
}

export const getPrinciples = () => async (dispatch) => {
  try {
    // const response = await axios.get('/principles')
    let res = mockDataResponse;
    console.log('actions test');
    dispatch({
      type: 'GET_PRINCIPLES',
      payload: res.data
    })
  } catch (error) {
    console.log(error.message);
    console.log("GET PRINCIPLES ERROR");
  }
}