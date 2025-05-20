-- DropForeignKey
ALTER TABLE `Transfer` DROP FOREIGN KEY `Transfer_from_address_fkey`;

-- DropForeignKey
ALTER TABLE `Transfer` DROP FOREIGN KEY `Transfer_to_address_fkey`;

-- DropIndex
DROP INDEX `Transfer_from_address_fkey` ON `Transfer`;

-- DropIndex
DROP INDEX `Transfer_to_address_fkey` ON `Transfer`;
