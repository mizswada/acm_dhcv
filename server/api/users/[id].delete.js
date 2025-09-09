export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');

    // Mock user deletion - replace with actual database delete
    // In a real application, you might want to soft delete instead of hard delete

    return {
      statusCode: 200,
      message: 'User deleted successfully'
    };
  } catch (error) {
    return {
      statusCode: 500,
      error: 'Internal Server Error',
      message: error.message
    };
  }
});
