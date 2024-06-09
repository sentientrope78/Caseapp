-- Active: 1715816262104@@127.0.0.1@3306@nigger
CREATE TABLE `diabetes` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `name` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `age` int NOT NULL,
  `pregnant` bit(1) NOT NULL,
  `min_WBC` float NOT NULL,
  `max_WBC` float NOT NULL,
  `min_RBC` float NOT NULL,
  `max_RBC` float NOT NULL,
  `min_hemoglobin` float NOT NULL,
  `max_hemoglobin` float NOT NULL,
  `min_platelet` float NOT NULL,
  `max_platelet` float NOT NULL,
  `min_glucose` float NOT NULL,
  `max_glucose` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

INSERT INTO diabetes (name, gender, age, pregnant, min_WBC, max_WBC, min_RBC, max_RBC, min_hemoglobin, max_hemoglobin, min_platelet, max_platelet, min_glucose, max_glucose) VALUES ('patient 1', 'female', '28', b'1', '5700', '14000', '2720000', '4430000', '10.5', '12', '125000', '150000', '70', '100');