import React from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { StudentContainer, ProfilePicture } from './styled';

export default function Students() {
  /* USE STATE
  1 param -> initial type of the first value, in this case, students is an array
  */
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    async function getStudents() {
      const response = await axios.get('/students');
      setStudents(response.data);
    }
    getStudents();
  }, []);

  return (
    <Container>
      <h1> Students </h1>
      <StudentContainer>
        {students.map((student) => (
          <div key={String(student.id)}>
            <ProfilePicture>
              {/* lodash get to get the first photo of the student array */}
              {get(student, 'Photos[0].url', false) ? (
                <img src={student.Photos[0].url} alt="" />
              ) : (
                <FaUserCircle size={42} />
              )}
            </ProfilePicture>
            <span> {student.name} </span>
            <span> {student.email} </span>

            <Link to={`/student/${student.id}/edit`}>
              <FaEdit size={16} title="Editar" />
            </Link>
            <Link to={`/student/${student.id}/delete`}>
              <FaWindowClose size={16} title="Excluir" />
            </Link>
          </div>
        ))}
      </StudentContainer>
    </Container>
  );
}
