import { Association,
         DataTypes,
         HasManyAddAssociationsMixin,
         HasManyGetAssociationsMixin,
         HasManyHasAssociationsMixin,
         Model,
         Optional } from 'sequelize'
import { sequelize } from '../app'
import { Event } from './event'

interface UserAttributes {
  id: number;
  username: string;
  pass: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
    public id!: number;
    public username!: string;
    public pass!: string;
    public readonly createdAt!: Date;
    public getEvents!: HasManyGetAssociationsMixin<Event>;
    public addEvent!: HasManyAddAssociationsMixin<Event, number>;
    public hasEvent!: HasManyHasAssociationsMixin<Event, number>;
    public static associations: {
      events: Association<User, Event>;
    };
}
