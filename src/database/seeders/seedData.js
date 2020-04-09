import { user } from '../models/index';

export default async () => {
    let selectedUser = await user.findByPk(1);
    if (!selectedUser) {
        selectedUser = await user.create({
            username: 'admin',
            password: 'admin123',
            role: 'admin'
        });
    }
};

