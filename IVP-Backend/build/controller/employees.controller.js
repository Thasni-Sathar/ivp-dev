"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const employees_services_1 = require("../services/employees.services");
const employeeService = new employees_services_1.EmployeeService();
class EmployeeController {
    /* To get the list of all categories */
    getEmployeeList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            employeeService.getAllEmployees()
                .then((data) => {
                res.status(200).send({ message: "Employees retrieved successfully", data });
            })
                .catch((error) => {
                console.log(error);
            });
        });
    }
    getEmployeeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let employeeId = req.params.id;
            employeeService.getEmployeeById(employeeId)
                .then((data) => {
                if (data.data !== 'null') {
                    res.status(200).send({ message: "particular employee retrieved successfully", data });
                }
            })
                .catch((error) => {
                res.status(401).send({ message: "employee doesn't exist" });
            });
        });
    }
    getEmployeeByEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let employeeMail = req.body.email;
            employeeService.getEmployeeByEmail(employeeMail)
                .then((data) => {
                if (data.data !== 'null') {
                    res.status(200).send({ message: "particular employee retrieved successfully", data });
                }
            })
                .catch((error) => {
                res.status(401).send({ message: "employee doesn't exist" });
            });
        });
    }
    addEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let employee = req.body;
            employeeService.createEmployee(employee)
                .then((data) => {
                res.status(200).send({ message: "employee created", data });
            })
                .catch((error) => {
                console.log(error);
            });
        });
    }
}
exports.EmployeeController = EmployeeController;
