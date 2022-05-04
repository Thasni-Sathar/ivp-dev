import { Json } from "sequelize/types/utils";
import { Role } from "../models/roles";

import { RoleService } from "../services/roles.service";

const roleService = new RoleService();



export class RoleController{

    /* To get the list of all categories */
    async addRole(req:any,res:any){
        let role:any = req.body;
        roleService.createRole(role)
            .then((data:any)=>{
                res.status(200).send({message:"role created",data});
        })
            .catch((error:string) => {
            console.log(error);
});
    }
}