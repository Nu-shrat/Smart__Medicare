CREATE TABLE `user` (
	`mobile_no` char(14) NOT NULL,
	`password` varchar(50) NOT NULL,
	`name` varchar(50) NOT NULL,
	`sex` enum('M','F','T','S') NOT NULL,
	`dob` DATE NOT NULL,
	`email` varchar(50) UNIQUE DEFAULT NULL,
	`document_id` char(17) UNIQUE DEFAULT NULL,
	`joined_on` DATETIME NOT NULL DEFAULT NOW(),
	PRIMARY KEY (`mobile_no`)
);

CREATE TABLE `hospital` (
	`registration_no` char(10) NOT NULL,
	`hospital_name` varchar(100) NOT NULL UNIQUE,
	`description` TEXT DEFAULT NULL,
	`hospital_type` enum('Public','Private') NOT NULL,
	`bed_type` set('Ward','Special Ward','Cabin','VIP Cabin','ICU','CCU','HDU','HFNCU','Emergency','COVID','Extra') NOT NULL,
	`image_source` varchar(500) NOT NULL UNIQUE,
	`website` tinytext DEFAULT NULL,
	`joined_on` DATETIME NOT NULL DEFAULT NOW(),
	`status` enum('public','private','deleted') NOT NULL DEFAULT 'private',
	PRIMARY KEY (`registration_no`)
);

CREATE TABLE `booking` (
	`id` char(10) NOT NULL,
	`booked_at` DATETIME NOT NULL DEFAULT NOW(),
	`mobile_no` char(14) NOT NULL,
	`name` varchar(50),
	`sex` enum('M','F','T','S') NOT NULL,
	`bed_type` enum('Ward','Special Ward','Cabin','VIP Cabin','ICU','CCU','HDU','HFNCU','Emergency','COVID','Extra') NOT NULL,
	`booked_for` enum('Self','Father','Mother','Brother','Sister','Relative','Friend','Stranger'),
	`cancelled_at` DATETIME DEFAULT NULL,
	`registration_no` char(10) NOT NULL,
	`status` enum('Requested','Booked','Served','Cancelled') NOT NULL,
	`remarks` tinytext DEFAULT NULL,
	`last_updated` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW(),
	PRIMARY KEY (`id`)
);

CREATE TABLE `staff` (
	`mobile_no` char(14) NOT NULL,
	`password` char(50) NOT NULL,
	`name` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL UNIQUE,
	`role` enum('Admin', 'DB Manager', 'Moderator') NOT NULL,
	`status` enum('Active', 'Inactive') NOT NULL,
	`registration_no` char(10) NOT NULL,
	`joined_on` DATETIME NOT NULL DEFAULT NOW(),
	`last_updated` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW(),
	PRIMARY KEY (`mobile_no`,`registration_no`,`joined_on`)
);

CREATE TABLE `capacity` (
	`registration_no` char(10) NOT NULL,
	`total_capacity` mediumint UNSIGNED NOT NULL,
	`ward` smallint UNSIGNED DEFAULT NULL,
	`special_ward` smallint UNSIGNED DEFAULT NULL,
	`cabin` tinyint UNSIGNED DEFAULT NULL,
	`vip_cabin` tinyint UNSIGNED DEFAULT NULL,
	`icu` tinyint UNSIGNED DEFAULT NULL,
	`ccu` tinyint UNSIGNED DEFAULT NULL,
	`hdu` smallint UNSIGNED DEFAULT NULL,
	`hfncu` smallint UNSIGNED DEFAULT NULL,
	`emergency` smallint UNSIGNED DEFAULT NULL,
	`covid` smallint UNSIGNED DEFAULT NULL,
	`extra` smallint UNSIGNED DEFAULT NULL,
	PRIMARY KEY (`registration_no`)
);

CREATE TABLE `address` (
	`registration_no` char(10) NOT NULL,
	`address` TEXT NOT NULL,
	`phone_no` char(14),
	`mobile_no` char(14),
	`latitude` DECIMAL(10,5),
	`longitude` DECIMAL(10,5),
	PRIMARY KEY (`registration_no`)
);

CREATE TABLE `log` (
	`logged_at` DATETIME NOT NULL DEFAULT NOW(),
	`registration_no` char(10) NOT NULL,
	`task` tinytext NOT NULL,
	`mobile_no` char(14) NOT NULL,
	`role` enum('Admin', 'DB Manager', 'Moderator') NOT NULL,
	PRIMARY KEY (`logged_at`,`registration_no`)
);

CREATE TABLE `vacant_bed_log` (
	`registration_no` char(10) NOT NULL,
	`last_updated` DATETIME NOT NULL DEFAULT NOW(),
	`ward` smallint UNSIGNED DEFAULT NULL,
	`special_ward` smallint UNSIGNED DEFAULT NULL,
	`cabin` tinyint UNSIGNED DEFAULT NULL,
	`vip_cabin` tinyint UNSIGNED DEFAULT NULL,
	`icu` tinyint UNSIGNED DEFAULT NULL,
	`ccu` tinyint UNSIGNED DEFAULT NULL,
	`hdu` smallint UNSIGNED DEFAULT NULL,
	`hfncu` smallint UNSIGNED DEFAULT NULL,
	`emergency` smallint UNSIGNED DEFAULT NULL,
	`covid` smallint UNSIGNED DEFAULT NULL,
	`extra` smallint UNSIGNED DEFAULT NULL,
	PRIMARY KEY (`registration_no`,`last_updated`)
);

CREATE TABLE `doctor` (
	`id` char(10) NOT NULL,
	`registration_no` char(10) NOT NULL,
	`name` varchar(50) NOT NULL,
	`designation` tinytext NOT NULL,
	`chamber` varchar(10),
	`bio` TEXT DEFAULT NULL,
	`joined_on` DATETIME NOT NULL DEFAULT NOW(),
	PRIMARY KEY (`id`,`registration_no`,`joined_on`)
);

CREATE TABLE `schedule` (
	`id` char(10) NOT NULL,
	`day` enum('R','S','M','T','W','A','F') NOT NULL,
	`start_time` TIME NOT NULL,
	`end_time` TIME NOT NULL,
	`last_updated` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW(),
	PRIMARY KEY (`id`,`day`)
);

CREATE TABLE `amenity` (
	`registration_no` char(10) NOT NULL,
	`atm` boolean DEFAULT NULL,
	`baby_corner` boolean DEFAULT NULL,
	`cafeteria` boolean DEFAULT NULL,
	`gift_shop` boolean DEFAULT NULL,
	`locker` boolean DEFAULT NULL,
	`parking` boolean DEFAULT NULL,
	`pharmacy` boolean DEFAULT NULL,
	`prayer_area` boolean DEFAULT NULL,
	`wheelchair` boolean DEFAULT NULL,
	`wifi` boolean DEFAULT NULL,
	PRIMARY KEY (`registration_no`)
);

CREATE TABLE `general_service` (
	`registration_no` char(10) NOT NULL,
	`autopsy` boolean DEFAULT NULL,
	`biopsy` boolean DEFAULT NULL,
	`blood_bank` boolean DEFAULT NULL,
	`bronchoscopy` boolean DEFAULT NULL,
	`ecg` boolean DEFAULT NULL,
	`echocardiography` boolean DEFAULT NULL,
	`emg` boolean DEFAULT NULL,
	`laparoscopy` boolean DEFAULT NULL,
	`phonocardiography` boolean DEFAULT NULL,
	`urinalysis` boolean DEFAULT NULL,
	PRIMARY KEY (`registration_no`)
);

CREATE TABLE `blood_analytical_service` (
	`registration_no` char(10) NOT NULL,
	`antibody_analysis` boolean DEFAULT NULL,
	`cbc` boolean DEFAULT NULL,
	`creatinine_analysis` boolean DEFAULT NULL,
	`crp` boolean DEFAULT NULL,
	`esr` boolean DEFAULT NULL,
	`fobt` boolean DEFAULT NULL,
	`hematocrit` boolean DEFAULT NULL,
	`kidney_function_analysis` boolean DEFAULT NULL,
	`lipid_profile` boolean DEFAULT NULL,
	`liver_function_analysis` boolean DEFAULT NULL,
	`rf` boolean DEFAULT NULL,
	`serum_analysis` boolean DEFAULT NULL,
	`sr` boolean DEFAULT NULL,
	PRIMARY KEY (`registration_no`)
);

CREATE TABLE `diagnostic_imaging_service` (
	`registration_no` char(10) NOT NULL,
	`angiocardiography` boolean DEFAULT NULL,
	`angiography` boolean DEFAULT NULL,
	`cta` boolean DEFAULT NULL,
	`ct` boolean DEFAULT NULL,
	`coloscopy` boolean DEFAULT NULL,
	`cystoscopy` boolean DEFAULT NULL,
	`echocardiography` boolean DEFAULT NULL,
	`endoscopy` boolean DEFAULT NULL,
	`fluoroscopy` boolean DEFAULT NULL,
	`mra` boolean DEFAULT NULL,
	`mri` boolean DEFAULT NULL,
	`mrs` boolean DEFAULT NULL,
	`mammography` boolean DEFAULT NULL,
	`pet` boolean DEFAULT NULL,
	`pet_ct` boolean DEFAULT NULL,
	`spect` boolean DEFAULT NULL,
	`ultrasound` boolean DEFAULT NULL,
	`x_ray` boolean DEFAULT NULL,
	PRIMARY KEY (`registration_no`)
);

ALTER TABLE `booking` ADD CONSTRAINT `booking_fk0` FOREIGN KEY (`mobile_no`) REFERENCES `user`(`mobile_no`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `booking` ADD CONSTRAINT `booking_fk1` FOREIGN KEY (`registration_no`) REFERENCES `hospital`(`registration_no`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `staff` ADD CONSTRAINT `staff_fk0` FOREIGN KEY (`registration_no`) REFERENCES `hospital`(`registration_no`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `capacity` ADD CONSTRAINT `capacity_fk0` FOREIGN KEY (`registration_no`) REFERENCES `hospital`(`registration_no`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `address` ADD CONSTRAINT `address_fk0` FOREIGN KEY (`registration_no`) REFERENCES `hospital`(`registration_no`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `log` ADD CONSTRAINT `log_fk0` FOREIGN KEY (`registration_no`) REFERENCES `hospital`(`registration_no`) ON DELETE CASCADE ON UPDATE CASCADE;
	
ALTER TABLE `log` ADD CONSTRAINT `log_fk1` FOREIGN KEY (`mobile_no`) REFERENCES `staff`(`mobile_no`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `vacant_bed_log` ADD CONSTRAINT `vacant_bed_log_fk0` FOREIGN KEY (`registration_no`) REFERENCES `hospital`(`registration_no`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `doctor` ADD CONSTRAINT `doctor_fk0` FOREIGN KEY (`registration_no`) REFERENCES `hospital`(`registration_no`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `schedule` ADD CONSTRAINT `schedule_fk0` FOREIGN KEY (`id`) REFERENCES `doctor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `amenity` ADD CONSTRAINT `amenity_fk0` FOREIGN KEY (`registration_no`) REFERENCES `hospital`(`registration_no`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `general_service` ADD CONSTRAINT `general_service_fk0` FOREIGN KEY (`registration_no`) REFERENCES `hospital`(`registration_no`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `blood_analytical_service` ADD CONSTRAINT `blood_analytical_service_fk0` FOREIGN KEY (`registration_no`) REFERENCES `hospital`(`registration_no`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `diagnostic_imaging_service` ADD CONSTRAINT `diagnostic_imaging_service_fk0` FOREIGN KEY (`registration_no`) REFERENCES `hospital`(`registration_no`) ON DELETE CASCADE ON UPDATE CASCADE;