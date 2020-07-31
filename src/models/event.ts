import { Association,
         DataTypes,
         HasManyAddAssociationsMixin,
         HasManyGetAssociationsMixin,
         HasManyHasAssociationsMixin,
         Model,
         Optional } from 'sequelize'
import { sequelize } from '../app'

interface EventAttributes {
  id: number;
  hostId: number;
  name: string;
}

interface EventCreationAttributes extends Optional<EventAttributes, "id"> {}

export class Event extends Model<EventAttributes, EventCreationAttributes>
  implements EventAttributes {
    public id!: number;
    public hostId!: number;
    public name!: string;
}

