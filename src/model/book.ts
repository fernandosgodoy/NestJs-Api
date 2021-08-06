import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export default class Book extends Model<Book> {


    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    public code: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    public name: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false
    })
    public price: number;

}