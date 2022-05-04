import { DataTypes, EnumDataType, Model, Optional } from 'sequelize';
import db from '../config/database'

interface InterviewCandidatesAttributes {
    id: number;
    candidateid: number;
    interviewid: number;
    interviewdate:Date;
    interviewtime:Date;
    requestlink: string;
    requestlinkstatus: EnumDataType<any>;
}

export interface CandidateCategoryOutput extends Required<InterviewCandidatesAttributes> {}

export class InterviewCandidates extends Model implements InterviewCandidatesAttributes {
    public id!: number
    public candidateid!: number
    public interviewid!: number
    public interviewdate!:Date
    public interviewtime!:Date
    public requestlink!: string
    public requestlinkstatus!: EnumDataType<any>;
}

InterviewCandidates.init({
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true},
    CandidateId: {
      type: DataTypes.INTEGER,
      allowNull: false},
    InterviewId: {
        type: DataTypes.INTEGER,
        allowNull: false},
    interviewDate: {
        type: DataTypes.DATE,
        allowNull: true},
    interviewTime: {
        type: DataTypes.DATE,
        allowNull: true},
    RequestLink: {
        type: DataTypes.STRING,
        allowNull: false},
    RequestLinkStatus:{
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
        modelName: 'interview_candidates',
        underscored : true,
        timestamps: true,
})