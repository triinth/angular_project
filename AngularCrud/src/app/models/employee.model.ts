import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export class Employee {
    id: number;
    name: string;
    gender: string;
    email?: string;
    phonenumber?: number;
    contactPreference: string;
    dateOfBirth: Date;
    department: string;
    isActive: boolean;
    photoPath?: string;
}
