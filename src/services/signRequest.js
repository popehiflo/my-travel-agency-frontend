import { loginStart, loginSuccess, loginFailure } from '../redux/userRedux';
import { publicRequest } from './request';

const signin = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post('/auth/local/signin', user);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export default signin;
