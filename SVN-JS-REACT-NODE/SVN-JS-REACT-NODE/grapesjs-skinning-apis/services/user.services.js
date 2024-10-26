import User from '../models/user.modal';

export const createUser = async (userBody) => {
    const userEmail = await User.findOne({ email: userBody.email });
    if(userEmail) {
        return { isSuccess: false, message: "User already exists." };
    }
    else {
        const user = new User();
        user.name = userBody.name;
        user.email = userBody.email;
        user.setPassword(userBody.password);
        user.engagement = userBody.engagement;
      
        const userResponse = await user.save();
        return { isSuccess: true, message: 'User created successfully.\nPlease login.' };
    }
};

export const userDetails = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

export const isEmailPresent = async (email) => {
    const user = await User.findOne({ email });
    if(!user) {
        return { isSuccess: false, message: "User does not exist. Please register to create account." };
    }
    else {
        return { isSuccess: true, message: 'User exists.'}
    }
}

export const changePasswordService = async ({ email, newPassword }) => {
    const user = await User.findOne({ email });
    if(user) {
        user.setPassword(newPassword);
        try {
            await user.save();
            return { isSuccess: true, message: 'Password successfully changed' }
        }
        catch(err) {
            return {
                isSuccess: false,
                message: "Password Update unsuccessful. Please try again later"
            };
        }
    }
    else return {
        isSuccess: false,
        message: "User does not exist. Please register to create account."
    };

}