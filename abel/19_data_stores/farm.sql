-- --------------------------------------
--  SIMPLE USERS DATABASE
-- --------------------------------------

DROP DATABASE IF EXISTS `Farm`;
CREATE DATABASE IF NOT EXISTS `Farm`; 
USE `Farm`;

SET NAMES UTF8MB4;
SET character_set_client = UTF8MB4;

-- --------------------------------------
--  TABLE DATA
-- --------------------------------------

CREATE TABLE `Customers` (
	`FirstName` varchar (20) NULL,
	`LastName` 	varchar (20) NULL,
	`Email`     varchar (30) NULL
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------
--  SAMPLE INSERT
-- --------------------------------------

INSERT INTO `Customers` VALUES 
	('kara',  'danvers', 'kara@mit.edu')
	-- ('diana', 'prince',  'diana@mit.edu'),
	-- ('barb',  'gordon',  'susan@mit.edu'),
	-- ('peter', 'parker',  'peter@mit.edu'),
	-- ('bruce', 'wayne',   'bruce@mit.edu')