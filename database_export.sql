--
-- PostgreSQL database dump
--

-- Dumped from database version 17.6 (Debian 17.6-1.pgdg12+1)
-- Dumped by pg_dump version 17.5

-- Started on 2025-08-26 17:08:42 CEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: ellenliden
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO ellenliden;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 16399)
-- Name: courses; Type: TABLE; Schema: public; Owner: ellenliden
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    name character varying(64) NOT NULL,
    code character varying(64) NOT NULL,
    progression character varying(64) NOT NULL,
    syllabus character varying(255) NOT NULL
);


ALTER TABLE public.courses OWNER TO ellenliden;

--
-- TOC entry 217 (class 1259 OID 16398)
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: ellenliden
--

CREATE SEQUENCE public.courses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.courses_id_seq OWNER TO ellenliden;

--
-- TOC entry 3369 (class 0 OID 0)
-- Dependencies: 217
-- Name: courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ellenliden
--

ALTER SEQUENCE public.courses_id_seq OWNED BY public.courses.id;


--
-- TOC entry 3214 (class 2604 OID 16402)
-- Name: courses id; Type: DEFAULT; Schema: public; Owner: ellenliden
--

ALTER TABLE ONLY public.courses ALTER COLUMN id SET DEFAULT nextval('public.courses_id_seq'::regclass);


--
-- TOC entry 3363 (class 0 OID 16399)
-- Dependencies: 218
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: ellenliden
--

COPY public.courses (id, name, code, progression, syllabus) FROM stdin;
10	Ellen	008596	A	https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT208G/
11	Ellen	008596	A	https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT208G/
12	Test 4	008596	B	https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT208G/
\.


--
-- TOC entry 3370 (class 0 OID 0)
-- Dependencies: 217
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ellenliden
--

SELECT pg_catalog.setval('public.courses_id_seq', 12, true);


--
-- TOC entry 3216 (class 2606 OID 16404)
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: ellenliden
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- TOC entry 2045 (class 826 OID 16391)
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES TO ellenliden;


--
-- TOC entry 2047 (class 826 OID 16393)
-- Name: DEFAULT PRIVILEGES FOR TYPES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TYPES TO ellenliden;


--
-- TOC entry 2046 (class 826 OID 16392)
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON FUNCTIONS TO ellenliden;


--
-- TOC entry 2044 (class 826 OID 16390)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES TO ellenliden;


-- Completed on 2025-08-26 17:08:58 CEST

--
-- PostgreSQL database dump complete
--

