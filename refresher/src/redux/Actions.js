import axios from 'axios';

const mockDataResponse = {
  data:  ['Operational', 'Security', 'Reliability', 'Performance', 'Cost']
}

export const getPrinciples = () => async (dispatch) => {
  try {
    // const response = await axios.get('/principles')
    let res = mockDataResponse;
    dispatch({
      type: 'GET_PRINCIPLES',
      payload: res.data
    })
  } catch (error) {
    console.log(error.message);
    console.log("GET PRINCIPLES ERROR");
  }

}

