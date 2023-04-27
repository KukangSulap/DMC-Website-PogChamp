-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2023 at 03:41 PM
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
-- Table structure for table `kereta`
--

CREATE TABLE `kereta` (
  `id_kereta` varchar(11) NOT NULL,
  `nama_kereta` varchar(100) NOT NULL,
  `harga_tiket_kereta` int(100) NOT NULL,
  `berangkat_kereta` varchar(100) NOT NULL,
  `tiba_kereta` varchar(100) NOT NULL,
  `no_duduk` varchar(100) NOT NULL,
  `icon_kereta` varchar(100) DEFAULT NULL,
  `bg_kereta` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kereta`
--

INSERT INTO `kereta` (`id_kereta`, `nama_kereta`, `harga_tiket_kereta`, `berangkat_kereta`, `tiba_kereta`, `no_duduk`, `icon_kereta`, `bg_kereta`) VALUES
('K-E331', 'Express', 70000, 'Bandung; 20 April 2023; 09.30', 'Bekasi; 20 April 2023; 11.30', 'EKS 3; 12B', 'train.jpg', 'train1');

-- --------------------------------------------------------

--
-- Table structure for table `pesawat`
--

CREATE TABLE `pesawat` (
  `id_pesawat` varchar(11) NOT NULL,
  `nama_pesawat` varchar(100) NOT NULL,
  `harga_pesawat` int(30) NOT NULL,
  `no_duduk` varchar(100) NOT NULL,
  `gate` int(11) NOT NULL,
  `jam_terbang` varchar(100) NOT NULL,
  `asal_pesawat` varchar(100) NOT NULL,
  `tujuan_pesawat` varchar(100) NOT NULL,
  `icon_pesawat` varchar(100) DEFAULT NULL,
  `bg_pesawat` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pesawat`
--

INSERT INTO `pesawat` (`id_pesawat`, `nama_pesawat`, `harga_pesawat`, `no_duduk`, `gate`, `jam_terbang`, `asal_pesawat`, `tujuan_pesawat`, `icon_pesawat`, `bg_pesawat`) VALUES
('P-C334', 'Citilink', 500000, '10B', 2, '21.00; 13 Maret 2023', 'Jakarta', 'Bandung', 'garuda.png', 'img2'),
('P-G301', 'Garuda Indonesia', 700000, '4A', 10, '10.00; 20 April 2023', 'Bekasi', 'Jakarta', 'lion.png', 'img2'),
('P-L001', 'Lion Air', 600000, '20C', 5, '06.00; 10 Febuari 2023', 'Bandung', 'Surabaya', 'garuda.png', 'img'),
('P-M020', 'Mandala Airlines', 900000, '12A', 3, '18.00; 12 Febuari 2023', 'Yogyakarta', 'Papua', 'cangcimen.png', 'img3');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `email` varchar(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `no_hp` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`email`, `first_name`, `last_name`, `address`, `no_hp`, `image`) VALUES
('surya', 'Ade', 'Surya', 'asdasd', '213123', '');

-- --------------------------------------------------------

--
-- Table structure for table `travel`
--

CREATE TABLE `travel` (
  `id_travel` varchar(11) NOT NULL,
  `nama_travel` varchar(20) NOT NULL,
  `harga_travel` int(30) NOT NULL,
  `no_duduk` varchar(20) NOT NULL,
  `waktu_berangkat` varchar(100) NOT NULL,
  `waktu_tiba` varchar(100) NOT NULL,
  `icon_travel` varchar(20) DEFAULT NULL,
  `bg_travel` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `travel`
--

INSERT INTO `travel` (`id_travel`, `nama_travel`, `harga_travel`, `no_duduk`, `waktu_berangkat`, `waktu_tiba`, `icon_travel`, `bg_travel`) VALUES
('T-K231', 'Kilat', 70000, '7', 'Jakarta; 10 April 2023; 09.00', 'Bandung; 10 April 2023; 11.00', 'travel.jpg', 'travel1');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `nama_belakang` varchar(100) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `nama`, `nama_belakang`, `role`) VALUES
(1, 'admin', 'password', 'Gerry', 'William', 'admin'),
(2, 'howler', '123', 'naufel', 'Abiu', 'admin'),
(3, 'surya', '123', 'Ade', 'Surya', 'user'),
(4, 'rodo', '123', 'Rodo', 'Idul', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kereta`
--
ALTER TABLE `kereta`
  ADD PRIMARY KEY (`id_kereta`);

--
-- Indexes for table `pesawat`
--
ALTER TABLE `pesawat`
  ADD PRIMARY KEY (`id_pesawat`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `travel`
--
ALTER TABLE `travel`
  ADD PRIMARY KEY (`id_travel`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
