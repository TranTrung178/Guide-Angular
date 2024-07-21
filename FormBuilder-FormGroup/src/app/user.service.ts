import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];

    getUsers(): Observable<any[]> {
        return of(this.users);
    }

    addUser(user: any): Observable<any> {
        user.id = this.users.length + 1;
        this.users.push(user);
        return of(user);
    }

    updateUser(user: any): Observable<any> {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index > -1) {
            this.users[index] = user;
        }
        return of(user);
    }
}
