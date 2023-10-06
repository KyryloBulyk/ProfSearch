import { useParams } from "react-router-dom";
//import { useGetTeacherQuery } from '../services/teacherApi';
import { teachers } from "../utils";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";

const TeacherPage = () => {
  const { id } = useParams();
  //const { data, error, isSuccess, isLoading } = useGetTeacherQuery(id);

  console.log();

  const teacher = teachers[0];
  console.log(teacher);

  return (
    <div className="max-w-7xl my-0 mx-auto pt-10 px-5 flex flex-col md:flex-row gap-10 ">
      <div className="w-[200px] h-full">
        <img
          src={teacher.photoUrl}
          alt={teacher.surname}
          className="w-full h-full"
        />
      </div>
      <div className="flex-[1]">
        <table className="text-left text-xl">
          <tr>
            <th className="py-5">Meno:</th>
            <td className="pl-[20px] py-5">
              {teacher.title} {teacher.name} {teacher.surname}
            </td>
          </tr>
          <tr>
            <th className="py-5">Oddelenie:</th>
            <p className="pl-[20px] py-5">{teacher.department}</p>
          </tr>
          <tr>
            <th className="py-5">E-mail:</th>
            <p className="pl-[20px] py-5">{teacher.contactEmail}</p>
          </tr>
          <tr>
            <th className="py-5">Kontakt:</th>
            <div className="pl-[20px] flex gap-5 py-5">
              <a href={teacher.linkedinUrl} className="w-[30px] h-[30px]">
                <AiFillLinkedin className="w-full h-full"/>
              </a>
              <a href={teacher.instagramUrl} className="w-[30px] h-[30px]">
                <AiOutlineInstagram className="w-full h-full"/>
              </a>
            </div>
          </tr>
          <tr>
            <th className="py-5 align-top">Opis:</th>
            <p className="pl-[20px] py-5">{teacher.description}</p>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TeacherPage;
