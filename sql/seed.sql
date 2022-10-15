-- insert value
INSERT INTO vets (id_vet, firstname_vet, lastname_vet, gender_vet) VALUES (1, 'John', 'McGenny', 'Male'), (2, 'Jenny', 'Iliano', 'Female'), (3, 'Jackie', 'Malop', 'Other'), (4, 'Laurence', 'Patik', 'Female');

INSERT INTO clinics (id_clinic, name_clinic, rating_clinic, address_clinic) VALUES (1, 'Sweet Paws', 4.5, '567 Kilopun Street, Los Angeles'), (2, 'Saltie''s', 2.0, '3456 Smiling Avenue, Los Angeles'), (3, 'Clean Cuties', 4.3, '93 Poliu Boulevard, Irvine');

INSERT INTO working_vet (id_vet, id_clinic) VALUES (1,2), (2,1), (3, 3), (4,3);

INSERT INTO cats (id_cat, name_cat, age_cat, gender_cat) VALUES (1, 'Sapphire', 12, 'Male'), (2, 'Keekee', 3, 'Male'), (3, 'Lady', 6, 'Female'), (4, 'Saleena', 9, 'Female'), (5, 'Paul', 4, 'Male'), (6, 'Silo', 2, 'Female');

INSERT INTO cat_vet (id_cat, id_vet) VALUES (1, 1), (2, 1), (3,2), (4, 3), (5,4), (6,4);