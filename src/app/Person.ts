
import { Document } from "./Document";
export class Person{
    id:number;
    secondName:string;
    firstName:string;
    patronymicName:string;
    serialDocument:string;
    numberDocument:string;
    document:Document;
    constructor()
    constructor(
        id?:number,
        secondName?:string,
        firstName?:string,
        patronymicName?:string,
        serialDocument?:string,
        numberDocument?:string,
        document?:Document
    ) {
        this.id = id
        this.secondName= secondName
        this.firstName=firstName
        this.patronymicName= patronymicName
        this.serialDocument= serialDocument
        this.numberDocument=numberDocument
        this.document=document
    }

}