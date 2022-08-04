drop database if exists `db`;
create database `db`;
use `db`;

create table `users`(
	`id` int not null auto_increment primary key,
  `email` varchar(100) not null unique,
  `name` varchar(100) not null,
  `password` varchar(50) not null
);

create table `posts`(
	`id` int not null auto_increment primary key,
  `message` varchar(255) not null,
  `user_id` int not null,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
