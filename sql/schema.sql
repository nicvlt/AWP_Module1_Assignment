CREATE DATABASE catdb;

\c catdb;

-- create a table
CREATE TABLE vets (
    id_vet SERIAL PRIMARY KEY,
    firstname_vet varchar(50),
    lastname_vet varchar(50) NOT NULL,
    gender_vet varchar(15) NOT NULL
);

CREATE TABLE clinics (
    id_clinic SERIAL PRIMARY KEY,
    name_clinic varchar(50) NOT NULL,
    rating_clinic real NOT NULL,
    address_clinic varchar(50) NOT NULL
);

CREATE TABLE working_vet (
    id_vet INTEGER NOT NULL,
    id_clinic INTEGER NOT NULL
);

CREATE TABLE cats (
  id_cat SERIAL PRIMARY KEY,
  name_cat varchar(50) NOT NULL,
  age_cat INTEGER,
  gender_cat varchar(15)
);

CREATE TABLE cat_vet (
    id_cat INTEGER NOT NULL,
    id_vet INTEGER NOT NULL
);
