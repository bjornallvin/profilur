-- AlterTable
ALTER TABLE `Project` ADD COLUMN `endDate` DATETIME(3) NULL,
    ADD COLUMN `startDate` DATETIME(3) NULL,
    MODIFY `image` VARCHAR(191) NULL;
