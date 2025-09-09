export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    
    // Validate required fields
    const requiredFields = ['username', 'email', 'firstName', 'lastName', 'password', 'roleId'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return {
          statusCode: 400,
          error: 'Bad Request',
          message: `${field} is required`
        };
      }
    }

    // Mock user creation - replace with actual database insert
    const newUser = {
      id: Date.now().toString(),
      username: body.username,
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      roleId: body.roleId,
      isActive: body.isActive !== undefined ? body.isActive : true,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return {
      statusCode: 201,
      data: newUser,
      message: 'User created successfully'
    };
  } catch (error) {
    return {
      statusCode: 500,
      error: 'Internal Server Error',
      message: error.message
    };
  }
});
