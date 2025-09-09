export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');
    const body = await readBody(event);

    // Mock user update - replace with actual database update
    const updatedUser = {
      id,
      username: body.username || 'admin',
      email: body.email || 'admin@example.com',
      firstName: body.firstName || 'Admin',
      lastName: body.lastName || 'User',
      roleId: body.roleId || '1',
      isActive: body.isActive !== undefined ? body.isActive : true,
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date()
    };

    return {
      statusCode: 200,
      data: updatedUser,
      message: 'User updated successfully'
    };
  } catch (error) {
    return {
      statusCode: 500,
      error: 'Internal Server Error',
      message: error.message
    };
  }
});
