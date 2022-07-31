drop database if exists `db`;
create database `db`;

create table `user`(
	`id` int not null auto_increment primary key,
  `email` varchar(100) not null,
  `name` varchar(100) not null,
  `password` varchar(50) not null
);

create table `post`(
	`id` int not null auto_increment primary key,
  `message` varchar(255) not null,
  `user_Id` int not null
);