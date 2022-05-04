import { DataTypes, EnumDataType, Model, Optional } from 'sequelize';
import db from '../config/database'

interface CategoriesAttributes {
    id: number;
    categoryname: string;
    status:EnumDataType<any>;
}

export interface CategoryOutput extends Required<CategoriesAttributes> {}

export class Category extends Model implements CategoriesAttributes {
    public id!: number
    public categoryname!: string
    public status!: EnumDataType<any>
}

Category.init({
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true},
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false},
    status:{
      type:DataTypes.STRING,
      values:['active','in active'],
      // validate: {
      //   customValidator: (value:string) => {
      //       const enums = ['active', 'inactive']
      //       if (!enums.includes(value)) {
      //           throw new Error('not a valid option')
      //       }
      //   }
    // },
      allowNull:false},
     },{
        sequelize: db,
        modelName: 'categories',
        underscored : true,
        timestamps: true,
})