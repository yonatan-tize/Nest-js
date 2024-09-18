import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
          "name": "John Doe",
          "email": "johndoe@example.com",
          "id": "abc123",
          "role": "ADMIN"
        },
        {
          "name": "Jane Smith",
          "email": "janesmith@example.com",
          "id": "def456",
          "role": "INTERN"
        },
        {
          "name": "Michael Johnson",
          "email": "michaelj@example.com",
          "id": "ghi789",
          "role": "USER"
        },
        {
          "name": "Emily Davis",
          "email": "emilydavis@example.com",
          "id": "jkl012",
          "role": "INTERN"
        }
      ];

    findAll(role?:"INTERN" | "ADMIN" | "USER"){
        if (role){
            return this.users.filter((user) => user.role === role)
        }
        return this.users
    }

    // FindOne

    findOne(id : string){
        const user = this.users.find(user => user.id === id)
        return user
    }

    //CreateUser

    createUser(user: {name: string, email: string, role: string }){
        let id = (this.users.length + 1).toString()
        const newUser = {
            ...user,
            id
        }
        this.users.push(newUser)

        return newUser
    }

    //Updateuser
    updateOne(id: string, updateUser: {name?: string, email?:string, role?: string}){
        this.users = this.users.map((user)=>{
            if (user.id === id){
                return {...user, ...updateUser}
            }
            return user
        })

        return this.findOne(id)
    }

    //deleteuser
    deleteUser(id: string){
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user=> user.id !== id)

        return removedUser
    }

}
