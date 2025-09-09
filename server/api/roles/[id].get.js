export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');
    
    // Mock role data - replace with actual database query
    const mockRoles = [
      {
        id: '1',
        name: 'Administrator',
        description: 'Full system access with all permissions',
        permissions: ['users.create', 'users.read', 'users.update', 'users.delete', 'roles.create', 'roles.read', 'roles.update', 'roles.delete'],
        isActive: true,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
      }
    ];

    const role = mockRoles.find(r => r.id === id);
    
    if (!role) {
      return {
        statusCode: 404,
        error: 'Not Found',
        message: 'Role not found'
      };
    }

    return {
      statusCode: 200,
      data: role
    };
  } catch (error) {
    return {
      statusCode: 500,
      error: 'Internal Server Error',
      message: error.message
    };
  }
});
