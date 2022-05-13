CREATE DATABASE IF NOT EXISTS `TODO_LIST_EBYTR`;
USE `TODO_LIST_EBYTR`;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` VARCHAR(255) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `username` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `created_at` DATETIME AUTO_INCREMENT,
  `updated_at` DATETIME AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

--
-- Table structure for table `todos`
--

DROP TABLE IF EXISTS `todos`;

CREATE TABLE `todos` (
  `id` VARCHAR(255) NOT NULL,
  `subject` VARCHAR(30) NOT NULL,
  `sub-topic` VARCHAR(60) NULL,
  `description` TEXT(255) NOT NULL,
  `limit_date` DATETIME NULL,
  `user_id` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL AUTO_INCREMENT,
  `updated_at` DATETIME NOT NULL AUTO_INCREMENT,
  CONSTRAINT `user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
) ENGINE=InnoDB;

--
-- Table structure for table `user_history`
--

DROP TABLE IF EXISTS `user_history`;

CREATE TABLE `user_history` (
  `id` VARCHAR(255) NOT NULL,
  `user_id` VARCHAR(255) NOT NULL,
  `todo_id` VARCHAR(255) NOT NULL,
  `created_at` DATETIME AUTO_INCREMENT,
  `updated_at` DATETIME AUTO_INCREMENT,
  CONSTRAINT `user_idfk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
  CONSTRAINT `todo_idfk` FOREIGN KEY (`todo_id`) REFERENCES `todos`(`id`),
  CONSTRAINT `history_pk` PRIMARY KEY (`id`, `user_id`, `todo_id`)
) ENGINE=InnoDB;
