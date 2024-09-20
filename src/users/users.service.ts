import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
          "id": "1",
          "name": "John Doe",
          "email": "johndoe@example.com",
          "role": "ADMIN"
        },
        {
          "id": "2",
          "name": "Jane Smith",
          "email": "janesmith@example.com",
          "role": "INTERN"
        },
        {
          "id": "3",
          "name": "Michael Johnson",
          "email": "michaelj@example.com",
          "role": "USER"
        },
        {
          "id": "4",
          "name": "Emily Davis",
          "email": "emilydavis@example.com",
          "role": "INTERN"
        }
      ];

    findAll(role?:"INTERN" | "ADMIN" | "USER"){
        if (role){
            const users = this.users.filter((user) => user.role === role)
            if (users.length === 0){
                throw new NotFoundException("User Role Not Found")
            }
            return users
        }
        return this.users
    }

    // FindOne
    findOne(id : string){
        const user = this.users.find(user => user.id === id)
        if (!user){
            throw new NotFoundException("User Not Found")
        }
        return user
    }

    //CreateUser
    createUser(user: CreateUserDto){
        let id = (this.users.length + 1).toString()
        const newUser = {
            id , 
            ...user
        }
        this.users.push(newUser)

        return newUser
    }

    //Updateuser
    updateOne(id: string, updateUser: UpdateUserDto){
        const user = this.users.find(user => user.id === id)
        if (!user) throw new NotFoundException("User Id Not Found")
        
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
        if (!removedUser) throw new NotFoundException("User Id Not Found")
            
        this.users = this.users.filter(user=> user.id !== id)

        return removedUser
    }

}
