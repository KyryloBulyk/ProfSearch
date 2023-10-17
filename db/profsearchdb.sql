--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comments (
    commentid bigint NOT NULL,
    teacherid bigint NOT NULL,
    commenttext text,
    date timestamp without time zone,
    author text
);


ALTER TABLE public.comments OWNER TO postgres;

--
-- Name: comments_commentid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comments_commentid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.comments_commentid_seq OWNER TO postgres;

--
-- Name: comments_commentid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comments_commentid_seq OWNED BY public.comments.commentid;


--
-- Name: comments_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comments_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.comments_seq OWNER TO postgres;

--
-- Name: subjects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subjects (
    subjectid bigint NOT NULL,
    subjectname text NOT NULL
);


ALTER TABLE public.subjects OWNER TO postgres;

--
-- Name: subjects_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subjects_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.subjects_seq OWNER TO postgres;

--
-- Name: subjects_subject_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subjects_subject_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.subjects_subject_seq OWNER TO postgres;

--
-- Name: subjects_subject_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subjects_subject_seq OWNED BY public.subjects.subjectid;


--
-- Name: teacher_subjects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teacher_subjects (
    teacher_subjectid integer NOT NULL,
    teacherid integer,
    subjectid integer
);


ALTER TABLE public.teacher_subjects OWNER TO postgres;

--
-- Name: teacher_subjects_teacher_subjectid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teacher_subjects_teacher_subjectid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.teacher_subjects_teacher_subjectid_seq OWNER TO postgres;

--
-- Name: teacher_subjects_teacher_subjectid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.teacher_subjects_teacher_subjectid_seq OWNED BY public.teacher_subjects.teacher_subjectid;


--
-- Name: teachers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teachers (
    teacherid bigint NOT NULL,
    photourl text,
    name text NOT NULL,
    surname text NOT NULL,
    title text,
    room text,
    department text,
    contactemail text,
    linkedinurl text,
    instagramurl text,
    description_ukraine text,
    building text,
    decription_slovak text
);


ALTER TABLE public.teachers OWNER TO postgres;

--
-- Name: teachers_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teachers_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.teachers_seq OWNER TO postgres;

--
-- Name: teachers_teacherid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teachers_teacherid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.teachers_teacherid_seq OWNER TO postgres;

--
-- Name: teachers_teacherid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.teachers_teacherid_seq OWNED BY public.teachers.teacherid;


--
-- Name: comments commentid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments ALTER COLUMN commentid SET DEFAULT nextval('public.comments_commentid_seq'::regclass);


--
-- Name: subjects subjectid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subjects ALTER COLUMN subjectid SET DEFAULT nextval('public.subjects_subject_seq'::regclass);


--
-- Name: teacher_subjects teacher_subjectid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teacher_subjects ALTER COLUMN teacher_subjectid SET DEFAULT nextval('public.teacher_subjects_teacher_subjectid_seq'::regclass);


--
-- Name: teachers teacherid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers ALTER COLUMN teacherid SET DEFAULT nextval('public.teachers_teacherid_seq'::regclass);


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comments (commentid, teacherid, commenttext, date, author) FROM stdin;
5	1	Terrible	2023-10-01 14:00:00	Kyrylo
6	2	Terrible	2023-10-01 14:00:00	Kyrylo
7	2	Terrible	2023-10-01 14:00:00	Kyrylo
8	2	Terrible	2023-10-01 14:00:00	Kyrylo
\.


--
-- Data for Name: subjects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subjects (subjectid, subjectname) FROM stdin;
\.


--
-- Data for Name: teacher_subjects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teacher_subjects (teacher_subjectid, teacherid, subjectid) FROM stdin;
\.


--
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teachers (teacherid, photourl, name, surname, title, room, department, contactemail, linkedinurl, instagramurl, description_ukraine, building, decription_slovak) FROM stdin;
1	\N	Kyrylo	Bulyk	PhD	402	KPI	kyrylo.bulyk@student.tuke.sk	\N	\N	\N	Jedlikova 9	\N
2	\N	Kyrylo	Bulyk	PhD	402	KPI	kyrylo.bulyk@student.tuke.sk	\N	\N	\N	Jedlikova 9	\N
3	\N	Kyrylo	Bulyk	PhD	402	KPI	kyrylo.bulyk@student.tuke.sk	\N	\N	\N	Jedlikova 9	\N
4	\N	Kyrylo	Bulyk	PhD	402	KPI	kyrylo.bulyk@student.tuke.sk	\N	\N	\N	Jedlikova 9	\N
5	\N	Kyrylo	Bulyk	PhD	402	KPI	kyrylo.bulyk@student.tuke.sk	\N	\N	\N	Jedlikova 9	\N
6	\N	Kyrylo	Bulyk	PhD	402	KPI	kyrylo.bulyk@student.tuke.sk	\N	\N	Привіт	Jedlikova 9	\N
7	\N	Kyrylo	Bulyk	PhD	402	KPI	kyrylo.bulyk@student.tuke.sk	\N	\N	Привіт	Jedlikova 9	Áno
\.


--
-- Name: comments_commentid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comments_commentid_seq', 8, true);


--
-- Name: comments_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comments_seq', 201, true);


--
-- Name: subjects_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subjects_seq', 1, false);


--
-- Name: subjects_subject_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subjects_subject_seq', 1, false);


--
-- Name: teacher_subjects_teacher_subjectid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teacher_subjects_teacher_subjectid_seq', 1, false);


--
-- Name: teachers_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teachers_seq', 301, true);


--
-- Name: teachers_teacherid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teachers_teacherid_seq', 7, true);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (commentid);


--
-- Name: subjects subjects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subjects
    ADD CONSTRAINT subjects_pkey PRIMARY KEY (subjectid);


--
-- Name: teacher_subjects teacher_subjects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teacher_subjects
    ADD CONSTRAINT teacher_subjects_pkey PRIMARY KEY (teacher_subjectid);


--
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (teacherid);


--
-- Name: comments comments_teacherid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_teacherid_fkey FOREIGN KEY (teacherid) REFERENCES public.teachers(teacherid);


--
-- Name: teacher_subjects teacher_subjects_subjectid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teacher_subjects
    ADD CONSTRAINT teacher_subjects_subjectid_fkey FOREIGN KEY (subjectid) REFERENCES public.subjects(subjectid);


--
-- Name: teacher_subjects teacher_subjects_teacherid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teacher_subjects
    ADD CONSTRAINT teacher_subjects_teacherid_fkey FOREIGN KEY (teacherid) REFERENCES public.teachers(teacherid);


--
-- PostgreSQL database dump complete
--

