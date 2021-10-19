import prisma from '../prisma';

class ProfileUserService {
    // eslint-disable-next-line camelcase
    async execute(user_id: string) {
        const user = await prisma.user.findFirst({
            where: {
                id: user_id,
            },
        });

        return user;
    }
}

export { ProfileUserService };
