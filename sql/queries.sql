-- all the clinics with a rating greater than 4.0
SELECT name_clinic, address_clinic, rating_clinic FROM clinics where rating_clinic >=4;

-- all the vets that work in a clinic based in LA
SELECT firstname_vet, lastname_vet, name_clinic, address_clinic FROM working_vet, vets, clinics 
WHERE working_vet.id_vet = vets.id_vet
AND working_vet.id_clinic = clinics.id_clinic
AND address_clinic LIKE '%Los Angeles';

-- all the male cats
SELECT name_cat FROM cats WHERE gender_cat = 'Male';

-- the vets of each cat
SELECT name_cat, age_cat, gender_cat, firstname_vet, lastname_vet FROM cat_vet
INNER JOIN cats ON cat_vet.id_cat = cats.id_cat
INNER JOIN vets ON cat_vet.id_vet = vets.id_vet;

-- the vets and the number of cats they work with
SELECT firstname_vet, lastname_vet,	count(cat_vet.id_vet) AS number_cat FROM cat_vet
INNER JOIN vets ON cat_vet.id_vet = vets.id_vet 
GROUP by cat_vet.id_vet;

