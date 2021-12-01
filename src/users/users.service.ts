import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  //Create a new User
  async create(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    const createdUser = new this.userModel({
      name, email, password,
    });
    return await createdUser.save();
  }

  //Get all USers
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  // //Get one user
  // async findOne(userId: string): Promise<User> {
  //   return await this.userModel.findById(userId).exec();
  // }

  // //Update one user
  // async update(userId: string, user: User): Promise<User> {
  //   return await this.userModel.findByIdAndUpdate(userId, user, { new: true }).exec();
  // }

  // //Delete one user
  // async delete(userId: string): Promise<User> {
  //   return await this.userModel.findByIdAndRemove(userId).exec();
  // }
}
