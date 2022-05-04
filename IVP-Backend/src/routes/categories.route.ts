import { Router } from 'express'
const router = Router()


import { CategoryController } from '../controller/categories.controller';

const categoryController = new CategoryController();

//for getting list of all categories
router.get('/categories',categoryController.getCategoryList);
router.get('/categories/:id',categoryController.getCategoryById);
router.get('/question/:categoryname',categoryController.getQuestionsByCategoryId);

// router.put('/update-employee-role/:id',categoryController.updateEmployeeRoles);
router.post('/categories',categoryController.addCategory);


module.exports = router