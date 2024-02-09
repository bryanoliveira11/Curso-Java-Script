import React from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaPlus,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from 'react-icons/fa';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import {
  StudentContainer,
  ProfilePicture,
  NewStudent,
  Paginate,
} from './styled';
import Loading from '../../components/Loading';

export default function Students() {
  /* USE STATE
  1 param -> initial type of the first value, in this case, students is an array
  */
  const [students, setStudents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(0);
  const studentsPerPage = 5;

  React.useEffect(() => {
    async function getStudents() {
      setIsLoading(true);
      const response = await axios.get('/students/');
      setStudents(response.data);
      setIsLoading(false);
    }
    getStudents();
  }, []);

  const indexOfLastStudent = (currentPage + 1) * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1> Students </h1>
      <NewStudent to="/student" className="new-student">
        <FaPlus size={12} className="fa-plus" />
        New Student
      </NewStudent>
      <StudentContainer>
        {currentStudents.map((student) => (
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
              <FaEdit size={16} title="Edit Student" />
            </Link>
            <Link to={`/student/${student.id}/delete`}>
              <FaWindowClose size={16} title="Delete Student" />
            </Link>
          </div>
        ))}
      </StudentContainer>
      <Paginate
        previousLabel={<FaArrowCircleLeft size={22} className="arrow-left" />}
        nextLabel={<FaArrowCircleRight size={22} className="arrow-right" />}
        breakLabel="..."
        breakClassName="break-me"
        pageCount={Math.ceil(students.length / studentsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
        pageClassName="page-item"
      />
    </Container>
  );
}
