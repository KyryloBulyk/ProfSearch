import { useParams } from "react-router-dom";
//import { useGetTeacherQuery } from '../services/teacherApi';
import { teachers } from "../utils";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import Rating from "../components/Rating";

const TeacherPage = () => {
  const { id } = useParams();
  //const { data, error, isSuccess, isLoading } = useGetTeacherQuery(id);
  const teacher = teachers[0];

  return (
    <div className="max-w-7xl my-0 mx-auto pt-10 px-5">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-52 h-full">
          <div>
            <img
              src={teacher.photoUrl}
              alt={teacher.surname}
              className="w-full h-full"
            />
          </div>
          <div className="flex justify-center items-center mt-8 gap-4">
            {teacher.linkedinUrl && (
              <a href={teacher.linkedinUrl} className="w-8 h-8">
                <AiFillLinkedin className="w-full h-full" />
              </a>
            )}
            {teacher.instagramUrl && (
              <a href={teacher.instagramUrl} className="w-8 h-8">
                <AiOutlineInstagram className="w-full h-full" />
              </a>
            )}
          </div>
        </div>
        <div className="flex-1">
          <table className="text-left text-base sm:text-xl">
            <tbody>
              <tr>
                <th className="py-5">Meno:</th>
                <td className="pl-5 py-5">
                  {teacher.title} {teacher.name} {teacher.surname}
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th className="py-5">Zaradenie:</th>
                <td className="pl-5 py-5">{teacher.classification}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th className="py-5">Oddelenie:</th>
                <td className="pl-5 py-5">{teacher.department}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th className="py-5">E-mail:</th>
                <td className="pl-5 py-5">{teacher.contactEmail}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th className="py-5">Kontakt:</th>
                <td className="pl-5 flex gap-5 py-5">{teacher.contact}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th className="py-5">Budova:</th>
                <td className="pl-5 flex gap-5 py-5">{teacher.building}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th className="py-5">Miestnosť:</th>
                <td className="pl-5 flex gap-5 py-5">{teacher.room}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th className="py-5 align-top">Predmety:</th>
                {teacher.subjects?.map((subject, index) => {
                  return (
                    <td key={index} className="pl-5 flex gap-5 py-5">
                      - {subject}
                    </td>
                  );
                })}
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th className="py-5 align-top">Opis:</th>
                <td className="pl-5 py-5">{teacher.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 my-20">
        <h2 className="text-5xl font-medium">Hodnotenie</h2>
        <Rating />
      </div>
    </div>
  );
};

export default TeacherPage;
