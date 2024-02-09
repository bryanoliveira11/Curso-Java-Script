import React from 'react';
import { get } from 'lodash';
import { FaCheck, FaUserCircle, FaEdit } from 'react-icons/fa';
import { isEmail, isInt, isFloat } from 'validator';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container } from '../../../styles/GlobalStyles';
import { Form, FaArrowBack, ProfilePicture, Title } from './styled';
import axios from '../../../services/axios';
import Loading from '../../../components/Loading';
import history from '../../../services/history';
import * as actions from '../../../store/modules/auth/actions';

export default function StudentEdit(props) {
  const lastStudentIdRef = React.useRef(null);
  const studentId = get(props, 'match.params.id', undefined);
  const dispatch = useDispatch();

  // states to set
  const [name, setName] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [age, setAge] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [photo, setPhoto] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!studentId || lastStudentIdRef.current === studentId) return;
    lastStudentIdRef.current = studentId;

    async function getStudent() {
      try {
        if (!studentId) return;
        setIsLoading(true);
        const studentData = await axios.get(`/students/${studentId}`);
        setIsLoading(false);
        if (studentData.length !== 0) {
          setName(studentData.data.name);
          setLastname(studentData.data.lastname);
          setEmail(studentData.data.email);
          setAge(studentData.data.age);
          setHeight(studentData.data.height);
          setWeight(studentData.data.weight);
          const Photo = get(studentData.data, 'Photos[0].url', '');
          setPhoto(Photo);
        }
      } catch (err) {
        toast.error('Student not Found');
        history.push('/');
      }
    }
    getStudent();
  }, [studentId]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (name.trim().length < 3 || name.trim().length > 255) {
      formErrors = true;
      toast.error('Field Name Must Have Between 3 and 255 Characters.');
    }

    if (lastname.trim().length < 3 || lastname.trim().length > 255) {
      formErrors = true;
      toast.error('Field Last Name Must Have Between 3 and 255 Characters.');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email must be Valid.');
    }

    if (!isInt(String(age))) {
      formErrors = true;
      toast.error('Invalid Age.');
    }

    if (!isFloat(String(height))) {
      formErrors = true;
      toast.error('Invalid Height.');
    }

    if (!isFloat(String(weight))) {
      formErrors = true;
      toast.error('Invalid Weight.');
    }

    if (formErrors) return;

    try {
      setIsLoading(true);
      if (studentId) {
        // edit
        await axios.put(`/students/${studentId}`, {
          name,
          lastname,
          email,
          age,
          height,
          weight,
        });
        toast.success('Student Edited Successfully.');
      } else {
        // create
        const { data } = await axios.post('/students/', {
          name,
          lastname,
          email,
          age,
          height,
          weight,
        });
        toast.success('Student Created Successfully.');
        history.push(`/student/${data.id}/edit`);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Unexpected Error.');
      }

      if (status === 401) {
        dispatch(actions.loginFailure());
      }
    }
  }

  return (
    <Container>
      <Title>
        <h1>{studentId ? `Student Edit` : 'New Student'}</h1>
        <Link to="/">
          <FaArrowBack size={15} />
          Go Back
        </Link>
      </Title>
      {studentId && (
        <ProfilePicture>
          {photo ? <img src={photo} alt={name} /> : <FaUserCircle size={180} />}
          <Link to={`/photos/${studentId}`}>
            <FaEdit size={24} />
          </Link>
        </ProfilePicture>
      )}
      <Loading isLoading={isLoading} />
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="lastname">
          Last Name
          <input
            type="text"
            placeholder="Student Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            type="text"
            placeholder="Student E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="Age">
          Age
          <input
            type="number"
            placeholder="Student Age"
            min={1}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label htmlFor="height">
          Height (cm)
          <input
            type="number"
            placeholder="Student Height (cm)"
            min={1}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <label htmlFor="weight">
          Weight (Kg)
          <input
            type="number"
            placeholder="Student Weight (kg)"
            min={1}
            step={0.5}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <button type="submit">
          <FaCheck size={18} className="fa-check" />
          {studentId ? 'Edit' : 'Create'}
        </button>
      </Form>
    </Container>
  );
}
