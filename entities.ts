 export interface Location {
locationId: number;

locationName: string;

locationAddress: string;
locationLatLng: number[];
managers: Manager;
region?: any;
employees?: Employee[];
}


export interface Employee {
employeeId: string;
employeeName: string;
employeeLastname: string;
employeePhonenumber: string;
employeeEmail: string;
employeePhoto?: string

location?:Location;
user?: any;
}

export interface Manager{
        managerId: string;
        managerFullNmame:string;
        managerSalary: number;
        managerEmail: string;
        managerPhotoNumber: string;
        location: Location;
        user: any;
    
}