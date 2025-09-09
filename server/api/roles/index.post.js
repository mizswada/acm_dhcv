export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    
    // Validate required fields
    const requiredFields = ['name', 'description', 'permissions'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return {
          statusCode: 400,
          error: 'Bad Request',
          message: `${field} is required`
        };
      }
    }

    // Mock role creation - replace with actual database insert
    const newRole = {
      id: Date.now().toString(),
      name: body.name,
      description: body.description,
      permissions: body.permissions,
      isActive: body.isActive !== undefined ? body.isActive : true,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return {
      statusCode: 201,
      data: newRole,
      message: 'Role created successfully'
    };
  } catch (error) {
    return {
      statusCode: 500,
      error: 'Internal Server Error',
      message: error.message
    };
  }
});
