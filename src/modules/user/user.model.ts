import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Please provite your Email'],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
      },
    },
    immutable: true, // not editable
  },
  photo: String,
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: '{VALUE} please provide a valid role.',
    },
    default: 'user',
    required: true,
  },
  userStatus: {
    type: String,
    enum: ['active', 'inactive'],
    required: true,
    default: 'active',
  },
});
// hook -> pre
// userSchema.pre('find', function (next) {
//   this.find({ userStatus: { $eq: 'inactive' } });
//   next();
// });
// hook -> post
// userSchema.post('find', function (docs, next) {
//   docs.forEach((doc: IUser) => {
//     doc.name.toUpperCase();
//   });
//   next();
// });

const User = model<IUser>('user', userSchema);
export default User;
