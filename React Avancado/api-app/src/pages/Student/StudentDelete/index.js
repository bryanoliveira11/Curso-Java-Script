import React from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Container } from '../../../styles/GlobalStyles';
import Loading from '../../../components/Loading';
import axios from '../../../services/axios';
import history from '../../../services/history';
import { StudentContainer, ButtonContainer, UserPicture } from './styled';

export default function StudentDelete(props) {
  const lastStudentIdRef = React.useRef(null);

  const [isLoading, setIsLoading] = React.useState(false);
  const [student, setStudent] = React.useState({});
  const studentId = get(props, 'match.params.id', undefined);

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
          setStudent(studentData.data);
        }
      } catch (err) {
        toast.error('Student not Found');
        history.push('/');
      }
    }
    getStudent();
  }, [studentId]);

  async function handleDelete() {
    try {
      await axios.delete(`/students/${studentId}`);
      toast.success('Student Deleted.');
      history.push('/');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      history.push('/');
      if (!errors) {
        toast.error('Unexpected Error.');
        return;
      }
      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1> Delete Student &quot;{student.name}&quot; ? </h1>
      <UserPicture>
        {get(student, 'Photos[0].url', false) ? (
          <img src={student.Photos[0].url} alt="" />
        ) : (
          <FaUserCircle size={60} />
        )}
      </UserPicture>
      <StudentContainer>
        <p>&#9679; id : {student.id} </p>
        <p>&#9679; Name : {student.name} </p>
        <p>&#9679; LastName : {student.lastname} </p>
        <p>&#9679; E-mail : {student.email} </p>
      </StudentContainer>
      <ButtonContainer>
        <button type="button" className="btn btn-ok" onClick={handleDelete}>
          Yes.
        </button>
        <Link to="/" className="btn btn-cancel">
          No.
        </Link>
      </ButtonContainer>
    </Container>
  );
}
