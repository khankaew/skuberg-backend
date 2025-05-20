/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Account` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Transfer` DROP FOREIGN KEY `Transfer_from_address_fkey`;

-- DropForeignKey
ALTER TABLE `Transfer` DROP FOREIGN KEY `Transfer_to_address_fkey`;

-- DropIndex
DROP INDEX `Transfer_from_address_fkey` ON `Transfer`;

-- DropIndex
DROP INDEX `Transfer_to_address_fkey` ON `Transfer`;

-- AlterTable
ALTER TABLE `Transfer` MODIFY `transfer_type` ENUM('INTERNAL', 'WITHDRAW', 'DEPOSIT') NOT NULL,
    MODIFY `from_address` VARCHAR(191) NULL,
    MODIFY `to_address` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Account_username_key` ON `Account`(`username`);

-- AddForeignKey
ALTER TABLE `Transfer` ADD CONSTRAINT `Transfer_from_address_fkey` FOREIGN KEY (`from_address`) REFERENCES `Wallet`(`address`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transfer` ADD CONSTRAINT `Transfer_to_address_fkey` FOREIGN KEY (`to_address`) REFERENCES `Wallet`(`address`) ON DELETE SET NULL ON UPDATE CASCADE;
