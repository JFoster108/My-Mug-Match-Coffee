CREATE TABLE
  public.tickets (
    id serial NOT NULL,
    name character varying(255) NOT NULL,
    status character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    "assignedUserId" integer NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
  );

ALTER TABLE
  public.tickets
ADD
  CONSTRAINT tickets_pkey PRIMARY KEY (id)

  CREATE TABLE
  public.users (
    id serial NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
  );

ALTER TABLE
  public.users
ADD
  CONSTRAINT users_pkey PRIMARY KEY (id)

CREATE TABLE mug_match_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE coffee_matches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES mug_match_users(id) ON DELETE CASCADE,
    coffee_name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
