--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Debian 16.3-1.pgdg120+1)
-- Dumped by pg_dump version 16.3 (Debian 16.3-1.pgdg120+1)

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
-- Name: article; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.article (
    id text NOT NULL,
    name text NOT NULL,
    coments text NOT NULL,
    phone text NOT NULL,
    email text NOT NULL,
    "createdBy" text,
    "organizationId" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "modifiedAt" timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "prismaUserId" text
);


--
-- Name: comment; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.comment (
    id text NOT NULL,
    body text NOT NULL,
    "articleId" text NOT NULL,
    "createdBy" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "modifiedAt" timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: organization; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.organization (
    id text NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    host text NOT NULL,
    state text NOT NULL,
    coments text,
    phone text NOT NULL,
    theme text NOT NULL,
    active boolean NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "modifiedAt" timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "zitadelOrg" text NOT NULL,
    "clientId" text NOT NULL,
    "callbackUrl" text,
    "apiPassword" text,
    "apiUser" text,
    slug text
);


--
-- Name: user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."user" (
    id text NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    coments text,
    phone text NOT NULL,
    active boolean NOT NULL,
    "organizationId" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "modifiedAt" timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Data for Name: article; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.article (id, name, coments, phone, email, "createdBy", "organizationId", "createdAt", "modifiedAt", "prismaUserId") FROM stdin;
5e8b5783-5d77-4e98-b864-b8c69ff49621	werfwretete	ertertreter	sefrgtertert	hans@welinux.cl	\N	123456789-caa0-45f8-9174-26479	2024-07-11 03:25:55.076+00	2024-07-11 03:25:55.208+00	\N
b7ab366b-62d4-4547-83f8-2f1afab856a9	juan pérez		+56993199305	hans@welinux.cl	\N	80d16a31-caa0-45f8-9174-7bdf6f70ad5c	2024-07-11 21:30:40.175+00	2024-07-11 21:30:40.233+00	\N
cb623233-2918-4160-b8d4-fd15b59f2325	Hans		+56993199305	hans@welinux.cl	\N	80d16a31-caa0-45f8-9174-7bdf6f70ad5c	2024-07-11 21:37:28.297+00	2024-07-11 21:37:28.298+00	\N
0ac6f884-4aea-4a31-b731-a0f38c6baaaa	juan pérez		+56993199305	hans@welinux.cl	\N	80d16a31-caa0-45f8-9174-7bdf6f70ad5c	2024-07-11 21:58:49.326+00	2024-07-11 21:58:49.327+00	\N
2cfa8744-aff6-43dc-b617-f5e265da03e9	juan pérez		+56993199305	hans@welinux.cl	\N	80d16a31-caa0-45f8-9174-7bdf6f70ad5c	2024-07-11 21:59:19.937+00	2024-07-11 21:59:19.938+00	\N
64a4e4d7-6cb7-4150-9cc4-6895a162e7d4	juan pérez	asdasd	+56993199305	hans@welinux.cl	\N	80d16a31-caa0-45f8-9174-7bdf6f70ad5c	2024-07-12 00:39:21.996+00	2024-07-12 00:39:21.997+00	\N
783183e0-f07f-4e88-9fb0-16f03c1fd91b	juan pérez	Probando	+56993199305	hans@welinux.cl	\N	80d16a31-caa0-45f8-9174-26479	2024-07-12 02:12:00.824+00	2024-07-12 02:12:00.825+00	\N
2ccf92b0-4a97-492e-9d90-8ceb974654c8	juan pérez		+56993199305	hans@welinux.cl	\N	80d16a31-caa0-45f8-9174-26479	2024-07-12 02:31:16.608+00	2024-07-12 02:31:16.609+00	\N
0ec3580c-4bcc-4e27-80f0-9bf88cc43a64	juan pérez		+56993199305	hans@welinux.cl	\N	80d16a31-caa0-45f8-9174-7bdf6f70ad5c	2024-07-12 16:26:31.718+00	2024-07-12 16:26:31.719+00	\N
\.


--
-- Data for Name: comment; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.comment (id, body, "articleId", "createdBy", "createdAt", "modifiedAt") FROM stdin;
\.


--
-- Data for Name: organization; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.organization (id, email, name, host, state, coments, phone, theme, active, "createdAt", "modifiedAt", "zitadelOrg", "clientId", "callbackUrl", "apiPassword", "apiUser", slug) FROM stdin;
80d16a31-caa0-45f8-9174-7bdf6f70ad5c	zstarter@gmail.com	zstarter	localhost:4200		\N	+569123456789	cyberpunk	t	2024-07-07 17:02:24.885+00	2024-07-07 17:02:24.885+00	zstarter	275846173430973396@zstarter	\N	xuGzWLnulSRQOskfqTCuxlvz3ivzIAkkTqUq5knnSuw3kUEzBRSiQCABBc5JNpmN	275846219585094612@zstarter	zstarter
123456789-caa0-45f8-9174-26479	dinobank@gmail.com	dinobank	dinobank.localhost:4200		\N	+569123456789	hallowen	t	2024-07-07 17:02:24.885+00	2024-07-07 17:02:24.885+00	dinobank	275845904743859156@zstarter	\N	z3TXyfiXWOsEZknTTyGAHqtnMvaGPyKh2Dp8gzEcv1MFrqgfErfANCWOnFXws2Xf	275845978462946260@zstarter	dinobank
80d16a31-caa0-45f8-9174-26479	dogsinc@gmail.com	dogsinc	dogsinc.localhost:4200		\N	+569123456789	cupcake	t	2024-07-07 17:02:24.885+00	2024-07-07 17:02:24.885+00	dogsinc	275846377307702228@zstarter	\N	nc53kCbVs23qKxDMMIRxmf8o5hno37etVoxjGGteq6KDzBr3ooRQ6qpLvxuCdcTg	275846432437634004@zstarter	dogsinc
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."user" (id, name, email, coments, phone, active, "organizationId", "createdAt", "modifiedAt") FROM stdin;
8498284a-581e-483e-ae4b-fd0b0e018301	Juan Pérez	user@megascaffold.cl	\N	+56997865431	t	80d16a31-caa0-45f8-9174-7bdf6f70ad5c	2024-07-07 17:02:24.888+00	2024-07-07 17:02:24.888+00
8498284a-581e-483e-ae4b-22226	Juan Pérez	hanspoo@gmail.com	\N	+56997865431	t	80d16a31-caa0-45f8-9174-26479	2024-07-07 17:02:24.888+00	2024-07-07 17:02:24.888+00
\.


--
-- Name: article article_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.article
    ADD CONSTRAINT article_pkey PRIMARY KEY (id);


--
-- Name: comment comment_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (id);


--
-- Name: organization organization_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.organization
    ADD CONSTRAINT organization_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: organization_name_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX organization_name_key ON public.organization USING btree (name);


--
-- Name: user_email_organizationId_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "user_email_organizationId_key" ON public."user" USING btree (email, "organizationId");


--
-- Name: article article_organizationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.article
    ADD CONSTRAINT "article_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: article article_prismaUserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.article
    ADD CONSTRAINT "article_prismaUserId_fkey" FOREIGN KEY ("prismaUserId") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: comment comment_articleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT "comment_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES public.article(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: comment comment_createdBy_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT "comment_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: user user_organizationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "user_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

