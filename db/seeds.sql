INSERT INTO User (id, name, username, grade, animal, color, food, password)
VALUES (1, "Becca", "moops", 5, "dog", "blue", "pizza", "password"),
		(2, "Marla", "elmo", 3, "cat", "red", "potatoes", "password"),
		(3, "Matt", "mrob", 2, "puppy", "purple", "fries", "password"),
		(4, "Lauren", "sweetness", 4, "rabbit", "pink", "eggs", "password");

INSERT INTO ArtPost (id, art_text, user_id)
VALUES (1, "I love art!", 1),
		(2, "I love Picasso!", 2),
		(3, "I love dancing as an art!", 3),
		(4, "I love abstract art!", 4);

INSERT INTO GeoPost (id, art_text, user_id)
VALUES (1, "I love to travel!", 1),
		(2, "I love Thailand!", 2),
		(3, "I love getting on a big jet plane!", 3),
		(4, "I love exploring!", 4);

INSERT INTO TechPost (id, art_text, user_id)
VALUES (1, "I love front end coding!", 1),
		(2, "I love being able to google anything!", 2),
		(3, "I love how technology makes life easier!", 3),
		(4, "I love Gopher-A-Friend!", 4);


