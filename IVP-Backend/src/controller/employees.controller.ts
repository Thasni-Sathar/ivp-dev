import { Employee } from "../models/employees";
import { EmployeeService } from "../services/employees.services";



const employeeService = new EmployeeService();




export class EmployeeController {

    /* To get the list of all categories */
    async getEmployeeList(req: any, res: any) {
        employeeService.getAllEmployees()
            .then((data: any) => {
                res.status(200).send({ message: "Employees retrieved successfully", data });
            })
            .catch((error: string) => {
                console.log(error);
            });
    }


    async getEmployeeById(req: any, res: any) {
        let employeeId: number = req.params.id;
        employeeService.getEmployeeById(employeeId)
            .then((data: any) => {
                if (data.data !== 'null') {
                    res.status(200).send({ message: "particular employee retrieved successfully", data });
                }
            })
            .catch((error: string) => {
                res.status(401).send({ message: "employee doesn't exist" })

            });
    }    
    async getEmployeeByEmail(req: any,res: any){
        let employeeMail:string=req.body.email;
        employeeService.getEmployeeByEmail(employeeMail)
            .then((data:any)=>{
                if(data.data!=='null'){
                    res.status(200).send({message:"particular employee retrieved successfully", data});
                }
            })
            .catch((error:string)=>{
                res.status(401).send({ message: "employee doesn't exist" })
            })
        
    }
    async addEmployee(req:any,res:any){
        let employee:any = req.body;
        employeeService.createEmployee(employee)
            .then((data:any)=>{
                res.status(200).send({message:"employee created",data});
        })
            .catch((error:string) => {
            console.log(error);
});
    }
}