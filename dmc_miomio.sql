-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2023 at 05:01 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dmc_miomio`
--

-- --------------------------------------------------------

--
-- Table structure for table `pesawat`
--

CREATE TABLE `pesawat` (
  `id_pesawat` int(11) NOT NULL,
  `nama_pesawat` varchar(20) NOT NULL,
  `harga_pesawat` int(30) NOT NULL,
  `jam_terbang` varchar(20) NOT NULL,
  `asal_pesawat` varchar(20) NOT NULL,
  `tujuan_pesawat` varchar(20) NOT NULL,
  `icon_pesawat` varchar(20) DEFAULT NULL,
  `bg_pesawat` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pesawat`
--

INSERT INTO `pesawat` (`id_pesawat`, `nama_pesawat`, `harga_pesawat`, `jam_terbang`, `asal_pesawat`, `tujuan_pesawat`, `icon_pesawat`, `bg_pesawat`) VALUES
(1, 'cat air', 700000, '20:20 - 20:30', 'bekasi', 'jakarta', 'lion.png', 'img2'),
(2, 'lion air', 600000, '20:20 - 20:30', 'akherat', 'asal-asal', 'garuda.png', 'img'),
(3, 'dog air', 900000, '20:20 - 20:30', 'bandara', 'langit', 'cangcimen.png', 'img3'),
(4, 'bird air', 300000, '20:22 - 20:32', 'happy new', 'year! yay', 'garuda.png', 'img2');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `nama`, `role`) VALUES
(1, 'admin', 'password', 'Gerry', 'admin'),
(2, 'howler', '123', 'naupel', 'user'),
(3, 'surya@halo.com', '123', 'surya', 'user'),
(4, 'rodo@dd.cc', '123', 'rodo', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pesawat`
--
ALTER TABLE `pesawat`
  ADD PRIMARY KEY (`id_pesawat`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
