import {Model,DataType,DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql'
export interface userinstance extends Model{
    id: string,
    name: string,
    age: string,
    password: string,
    ender: string
}
export const BancoUser = sequelize.define<userinstance>('BancoUser',{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING
    },
    age:{
        type:DataTypes.INTEGER,
        defaultValue: 18
    },
    password:{
        type:DataTypes.INTEGER
    },
    ender:{
        type:DataTypes.INTEGER
    }
},
{
    tableName:'usuarios',
    timestamps:false
});