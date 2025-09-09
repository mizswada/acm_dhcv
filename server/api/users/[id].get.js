export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');
    
    // Mock user data - replace with actual database query
    const mockUsers = [
      {
        id: '1',
        username: 'admin',
        email: 'admin@example.com',
        firstName: 'Admin',
        lastName: 'User',
        roleId: '1',
        role: {
          id: '1',
          name: 'Administrator',
          description: 'Full system access'
        },
        isActive: true,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
      }
    ];

    const user = mockUsers.find(u => u.id === id);
    
    if (!user) {
      return {
        statusCode: 404,
        error: 'Not Found',
        message: 'User not found'
      };
    }

    return {
      statusCode: 200,
      data: user
    };
  } catch (error) {
    return {
      statusCode: 500,
      error: 'Internal Server Error',
      message: error.message
    };
  }
});
