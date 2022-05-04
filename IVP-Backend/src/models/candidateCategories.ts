import { DataTypes, EnumDataType, Model, Optional } from 'sequelize';
import db from '../config/database'

interface CandidateCategoriesAttributes {
    id: number;
    candidatecategoryname: string;
}

export interface CandidateCategoryOutput extends Required<CandidateCategoriesAttributes> {}

export class CandidateCategory extends Model implements CandidateCategoriesAttributes {
    public id!: number
    public candidatecategoryname!: string
}

CandidateCategory.init({
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true},
    CandidateCategoryName: {
      type: DataTypes.STRING,
      allowNull: false},
     },{
        sequelize: db,
        modelName: 'candidate_categories',
        underscored : true,
        timestamps: true,
})