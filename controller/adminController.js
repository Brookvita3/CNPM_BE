const userRepository = require('../repositories/userRepository');
const printerRepository = require('../repositories/printerRepository');
const Printer = require('../models/print');





// // [POST] admin/add/user
// module.exports.addUser = async (req, res) => {
//     try {
//         const { username, email, password, years, role } = req.body;

//         const existingUser = await userRepository.findByEmail(email);
//         if (existingUser) throw new Error('Email already in use');

//         const user = {
//             username,
//             email,
//             password,
//             years,
//             role,
//         };

//         await UserRepository.create(user);
//         res.status(200).json({ message: 'User added successfully', username });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//         next(error);
//     }
// };






// [POST] admin/add/printer
module.exports.addPrinter = async (req, res, next) => {
    try {
        const { name, location, status, remaining_page } = req.body;

        const existingPrinter = await printerRepository.findByName(name);
        if (existingPrinter) {
            throw new Error('Printer already exists');
        }
        printerRepository.create({ name, location, status });
        res.status(200).json({ message: 'Printer added successfully' });

    } catch (error) {
        res.status(400).json({ message: error.message });
        next(error);
    }
};


module.exports.getAddPrinters = async (req, res) => {
    try {
        res.render("admin/add_printers");
    } catch (error) {
        console.error(error);
    }
}


module.exports.logout = (req, res, next) => {
    res
        .clearCookie('refreshToken')
        .status(200)
        .json({ message: 'Logout successfully' });
};


// // [DELETE] admin/delete/printer
// module.exports.deletePrinter = async (req, res) => {
//     try {
//         const { name } = req.body;
//         if (!name) {
//             return res.status(400).json({ message: 'Thiếu tên máy in' });
//         }
//         const result = await printerUseCase.deletePrinterByName(name);
//         if (result.deletedCount > 0) {
//             return res.status(200).json({ message: 'Máy in đã được xóa thành công' });
//         } else {
//             return res.status(404).json({ message: 'Không tìm thấy máy in để xóa' });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Lỗi server, không thể xóa máy in' });
//     }
// };

// // [GET] admin/get/printers
// module.exports.getAllPrinters = async (req, res) => {
//     try {
//         const printers = await printerUseCase.getAllPrinters();
//         return printers;
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: 'Lỗi:', error: error.message });
//     }
// }

// // [GET] admin/get/printer_history

// module.exports.getPrinterHistory = async (req, res) => {
//     try {
//         console.log(req.query);
//         const printerName = req.query.printerName;
//         const printer = this.getAllPrinters()
//         console.log(printerName);
//         if (!printerName) {
//             return res.status(400).json({ message: 'Thiếu tên máy in' });
//         }
//         const printerHistory = await printerUseCase.getPrinterHistory(printerName);
//         console.log(printerHistory);
//         res.redirect(`/admin/get/printer_history_by_name?printerName=${printerName}`);
//     } catch (error) {
//         console.log(error);
//     }
// }

// // [GET] admin/get/printer_history_by_name
// module.exports.getPrinterHistoryByName = async (req, res) => {
//     try {
//         const printerName = req.query.printerName;
//         const printerHistory = await printerUseCase.getPrinterHistory(printerName);
//         const printer = await this.getAllPrinters();
//         res.render("admin/admin_manage_printer", {
//             printer_history: printerHistory,
//             printers: printer,
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

// // [PATCH] admin/change/printer

// module.exports.changePrinter = async (req, res) => {
//     try {
//         const { name, newName, newLocation, newStatus } = req.body;
//         if (!['On', 'Off'].includes(newStatus)) {
//             return res.status(400).json({ message: 'Trạng thái không hợp lệ' });
//         }
//         const printer = await Printer.findOne({ name });
//         if (!printer) {
//             return res.status(404).json({ message: 'Printer not found' });
//         }
//         const updates = {};
//         if (newName) updates.name = newName;
//         if (newLocation) updates.location = newLocation;
//         if (newStatus) updates.status = newStatus;
//         const updatedPrinter = await printerUseCase.updatePrinter(name, updates);
//         res.status(200).json({ message: 'Status updated successfully', printer: updatedPrinter });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// }

// module.exports.getindexPage = async (req, res) => {
//     try {
//         const printer = await this.getAllPrinters();
//         res.render("admin/admin_manage_printer", {
//             printers: printer,
//         });
//     } catch (error) {
//         console.error(error);
//     }
// }








// // xoa user theo email
// //[DELETE] admin/delete/user
// module.exports.deleteUser = async (req, res) => {
//     try {
//         const { email } = req.body;
//         const user = await userRepository.findByEmail(email)
//         await adminUseCase.deleteUser(email);
//         res.status(200).json({ message: 'xoa thanh cong', data: user });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Lỗi server, không thể xóa người dùng' });
//     }
// };