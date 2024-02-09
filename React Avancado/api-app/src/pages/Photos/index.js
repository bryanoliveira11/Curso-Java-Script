import React from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Form } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Photos(props) {
  const dispatch = useDispatch();
  const studentId = get(props, 'match.params.id', '');
  const [isLoading, setIsLoading] = React.useState(false);
  const [photo, setPhoto] = React.useState('');

  React.useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/students/${studentId}`);
        setIsLoading(false);
        setPhoto(get(data, 'Photos[0].url', ''));
      } catch (err) {
        setIsLoading(false);
        toast.error('Error while Obtaining the Image.');
        history.push('/');
      }
    }
    getData();
  }, [studentId]);

  async function handleChange(e) {
    const photoFile = e.target.files[0];
    const photoUrl = URL.createObjectURL(photoFile);
    setPhoto(photoUrl);

    const formData = new FormData();
    formData.append('student_id', studentId);
    formData.append('photo', photoFile);

    try {
      setIsLoading(true);
      await axios.post('/photos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setIsLoading(false);
      toast.success('Photo Submited Successfully.');
    } catch (err) {
      setIsLoading(false);
      const status = get(err, 'response.status', 0);
      toast.error('Error while Submiting the Image.');

      if (status === 401) {
        dispatch(actions.loginFailure());
      }
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title> Photos </Title>
      <Form>
        <label htmlFor="photo">
          {photo ? <img src={photo} alt="" /> : 'Select a Photo'}
          <input type="file" id="photo" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}
