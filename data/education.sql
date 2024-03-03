-- --------------------------------------
--  TABLE COLLEGES
-- --------------------------------------

CREATE TABLE `colleges` (
	`collegeID` 		int NULL,
	`name` 				varchar (20) NULL,
	`students` 			int NULL,	
	`city` 				varchar (15) NULL ,
	`region` 			varchar (15) NULL ,	
	`country` 			varchar (15) NULL 
);

-- --------------------------------------
--  TABLE STUDENTS
-- --------------------------------------

CREATE TABLE `students` (
	`studentID` 		int NULL,
	`collegeID` 		int NULL,	
	`firstName` 		varchar (20) NULL ,
	`lastName` 			varchar (20) NULL ,	
	`birthDate` 		date NULL ,	
	`email` 			varchar (30) NULL ,
	`city` 				varchar (15) NULL ,
	`region` 			varchar (15) NULL ,
	`country` 			varchar (15) NULL
);

-- --------------------------------------
--  POPULATE COLLEGES
-- --------------------------------------

INSERT INTO `colleges` VALUES (1,'MIT',11,'Cambridge','MA','USA'),
(2,'Brown',9,'Providence','RI','USA'),
(3,'Dartmouth',6,'Hanover','NH','USA'),
(4,'Stanford',17,'Stanford','CA','USA'),
(5,'Yale',12,'New Haven','CT','USA'),
(6,'Columbia',31,'New York','NY','USA'),
(7,'Harvard',23,'Cambridge','MA','USA'),
(8,'Princeton',9,'Princeton','NJ','USA'),
(9,'Johns Hopkins',24,'Baltimore','MD','USA'),
(10,'Northwestern',21,'Evanston','IL','USA'),
(11,'Duke',15,'Durham','NC','USA'),
(12,'Cornell',22,'Ithaca','NY','USA'),
(13,'Notre Dame',9,'Notre Dame','IN','USA'),
(14,'UCLA',32,'Los Angeles','CA','USA'),
(15,'Berkeley',42,'Berkeley','CA','USA'),
(16,'Georgetown',5,'Washington','DC','USA'),
(17,'Michigan',45,'Ann Arbor','MI','USA'),
(18,'USC',44,'Los Angeles','CA','USA'),
(19,'Tufts',11,'Medford','MA','USA'),
(20,'NYU',51,'New York','NY','USA');

-- --------------------------------------
--  POPULATE STUDENTS
-- --------------------------------------

INSERT INTO `students` VALUES (1,1,'Nancy','Davolio','1948-12-08','nancy@gmail.com','Seattle','WA','USA'),
(2,9,'Andrew','Fuller','1952-02-19','andrew@yahoo.com','Dallas','TX','USA'),
(3,8,'Janet','Leverling','1963-08-30','janet@hotmail.com','Miami','FL','USA'),
(4,3,'Margaret','Peacock','1937-09-19','maggie@outlook.com','Phoenix','AZ','USA'),
(5,4,'Steven','Buchanan','1955-03-04','steve@apple.com','Denver','CO','USA'),
(6,7,'Michael','Suyama','1963-07-02','mike@icloud.com','Portland','OR','USA'),
(7,6,'Robert','King','1960-05-29','rob@gmail.com','San Francisco','CA','USA'),
(8,5,'Laura','Callahan','1958-01-09','laura@gmail.com','Memphis','TN','USA'),
(9,2,'Anne','Dodsworth','1966-01-27','anne@msn.com','Portland','ME','USA'),
(10,1,'Ivy','Johnson','1986-01-20','ivy@gmail.com','Chicago','IL','USA'),
(11,1,'Ana','Trujillo','1998-10-08','ana@gmail.com','Seattle','WA','USA'),
(12,9,'Thomas','Hardy','1992-12-09','tom@yahoo.com','Dallas','TX','USA'),
(13,5,'Antonio','Moreno','1993-03-23','tony@hotmail.com','Miami','FL','USA'),
(14,7,'Elizabeth','Brown','1997-01-11','beth@outlook.com','Phoenix','AZ','USA'),
(15,3,'Ann','Devon','1995-04-24','ann@apple.com','Denver','CO','USA'),
(16,2,'Ariel','Cruz','1993-02-12','ariel@icloud.com','Portland','OR','USA'),
(17,6,'Giovanni','Rovelli','1990-09-19','gio@gmail.com','San Francisco','CA','USA'),
(18,10,'Marie','Bertrand','1998-09-29','marie@gmail.com','Memphis','TN','USA'),
(19,4,'Philip','Cramer','1996-07-17','phil@msn.com','Portland','ME','USA'),
(20,8,'Michael','Holz','1996-02-25','michael@gmail.com','Chicago','IL','USA');
