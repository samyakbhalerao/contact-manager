export class EmployeeContactData {
    _id: any;
    firstName: string;
    lastName: string;
    email: string;
    contactNo: number;
    status: string;

    constructor(id: any,
        firstName: string,
        lastName: string,
        email: string,
        contactNo: number,
        status: string, ) {
        this._id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNo = contactNo;
        this.status = status;
    }


}