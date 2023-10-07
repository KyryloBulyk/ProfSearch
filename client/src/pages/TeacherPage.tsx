import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { useTranslation } from "react-i18next";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Teacher } from "../types";
import { teachersData } from "../utils";
import Rating from "../components/Rating";

const TeacherPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [teacher, setTeacher] = useState<Teacher>(teachersData[0]);
  const { fetching } = useFetching(async () => {
    const { data } = await axios.get(
      `http://147.232.182.160:8080/api/teachers/${id}`
    );
    setTeacher(data);
  });
  // TODO - fetch teacher by id
  // useEffect(() => {
  // 	fetching();
  // }, []);

  return (
    <div className="py-24 max-w-7xl my-0 mx-auto flex flex-col">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-48 h-full">
          <div>
            {teacher.photoUrl && (
              <img
                src={teacher.photoUrl}
                alt={teacher.surname}
                className="w-full h-full rounded-md"
              />
            )}
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
        <table className="flex-1 text-left text-xl">
          <tbody>
            <tr>
              <th className="pt-5">{t("teacherPage.name")}:</th>
              <td className="pl-5 pt-5">
                {teacher.title} {teacher.name} {teacher.surname}
              </td>
            </tr>
            <tr>
              <th className="pt-5">{t("teacherPage.classification")}:</th>
              <td className="pl-5 pt-5">{teacher.classification}</td>
            </tr>
            <tr>
              <th className="pt-5">{t("teacherPage.department")}:</th>
              <td className="pl-5 pt-5">{teacher.department}</td>
            </tr>
            <tr>
              <th className="pt-5">{t("teacherPage.mail")}:</th>
              <td className="pl-5 pt-5">{teacher.contactEmail}</td>
            </tr>
            <tr>
              <th className="pt-5">{t("teacherPage.contacts")}:</th>
              <td className="pl-5 pt-5">{teacher.contact}</td>
            </tr>
            <tr>
              <th className="pt-5">{t("teacherPage.building")}:</th>
              <td className="pl-5 pt-5">{teacher.building}</td>
            </tr>
            <tr>
              <th className="pt-5">{t("teacherPage.room")}:</th>
              <td className="pl-5 pt-5">{teacher.room}</td>
            </tr>
            <tr>
                <th className="pt-5 align-top">Predmety:</th>
                {teacher.subjects?.map((subject, index) => {
                  return (
                    <td key={index} className="pl-5 pt-5 flex">
                      - {subject}
                    </td>
                  );
                })}
              </tr>
            <tr>
              <th className="pt-5 align-top">{t("teacherPage.about")}:</th>
              <td className="pl-5 pt-5">{teacher.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-10 my-20">
        <h2 className="text-5xl font-medium">Hodnotenie</h2>
        <Rating />
      </div>
    </div>
  );
};

export default TeacherPage;
